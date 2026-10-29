import amqp from 'amqplib';
import { reintentar } from './reintentar.js';

//definimos el exchange donde llegaran todos los mensajes
const EXCHANGE = 'tienda'; 
let canal;


//para conectar a Rabbit
export async function conectarRabbit(url) {

    
    const conexion = await reintentar('conectar a RabbitMQ', () => amqp.connect(url));
    canal = await conexion.createChannel(); //crea el canal de comunicacion

    //asegura de que si no existe el exchange llamado tienda y de tipo topic que lo cree
    await canal.assertExchange(EXCHANGE, 'topic'); 
    console.log('Conectado a RabbitMQ');

}

//para publicar el evento
export function publicar(evento, datos) {

    //transforma los datos a bytes para que Rabbit los entienda
    const cuerpo = Buffer.from(JSON.stringify(datos));

    //publica el evento
    canal.publish(EXCHANGE, evento, cuerpo);
    console.log("Publicado:", evento, datos);

}


//subscribe al exchange
export async function subscribir(cola, evento, manejador) {
    await canal.assertQueue(cola);  //asegura que existe la cola

    //conecta la cola al exchange tienda con su evento correspondiente
    await canal.bindQueue(cola, EXCHANGE, evento); 

    //mantiene el microservicio escuchando la cola
    canal.consume(cola, async (msg) => {
        if (!msg) return;
        try {
            const datos = JSON.parse(msg.content.toString());
            console.log("Recibido:", evento, datos);
            await manejador(datos); //ejecuta la logica de negocio el pasar el evento
            canal.ack(msg); //si el evento se procesó con éxito entonces que elimine el mensaje de la cola
        } catch (err) {
            console.log(err)
            canal.nack(msg, false, false) //si falló, le avisa a Rabbit que hubo un error
        }

    })
}
