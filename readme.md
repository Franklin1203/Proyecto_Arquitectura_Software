# Tienda_Ultra_Tech

API RESTful robusta estructurada  para la gestión de inventario y órdenes de compra de una tienda de equipos tecnológicos de alto rendimiento.

### Tecnologías utilizadas
```
 Node.js, Express
 SQL Server 
 MongoDB 
 Docker, Docker Compose
 React.js
```
---

### Pasos para instalar y correr el proyecto

> Levantar bases de datos con Docker
```
Abre una terminal en la raíz del proyecto y ejecuta el contenedor para levantar SQL Server y MongoDB:
docker compose up -d
```

#### Configurar Variables de Entorno (.env)
```
Crea un archivo llamado `.env` en la raíz de tu carpeta backend y pega la siguiente configuración:
PORT = 3005
SQL_SERVER = localhost
SQL_DATABASE = tiendaDB
SQL_USER = sa
SQL_PORT = 1433
SQL_PASSWORD = tu-clave-secreta
JWT_SECRET = tu-clave-secreta
MONGO_URI = mongodb://localhost:27017/tiendaDB
```

#### Crear las tablas en SQL Server

```
 Conéctate a tu base de datos SQL Server (con el usuario `sa` y tu clave).
 Abre y ejecuta el script que se encuentra en el repositorio en la ruta: `Backend/src/config/CREATE DATABASE tiendaDB.sql`. *(Esto creará la base de datos y todas las tablas necesarias para el módulo de productos).*

```
#### Instalar dependencias y ejecutar

 necesitas ejecutar el backend y el frontend por separado:
````
**Para el Backend:**
Abre una terminal en la carpeta del backend:
npm install
npm run dev

**Para el Frontend:**
Abre una nueva terminal en la carpeta del frontend:
npm install
npm run dev

````

## Explicación de arquitectura hexagonal

En primera instancia, el primer módulo en aplicarle la arquitectura fue al módulo
de productos, lo que hice fue crear una carpeta separada con el nombre de productos
y dentro de la misma creé tres carpetas para aplicar la arquitectura que fueron:
dominio, aplicacion, infraestructura.

#### Dominio

Para el dominio, cree dos archivos para manejar las reglas de negocio:

"producto-schema", para crear lo que sería el modelo de producto, con todas las
reglas de lugar que se deben de tomar en cuenta a la hora de crear productos,
validaciones para nombre, precio, etc.

"producto-repositorio", siendo este el puerto de salida que incluye todas las
funcionalidades que tendría el módulo, como crear, editar, listar, etc.


#### aplicacion

para la aplicacion, cree un archivo llamado "producto-servicio" donde implementé todos los casos de uso,
tomando como referencia o molde el repositorio creado en el dominio, sin involucrar ninguna Tecnología
de base de datos para respetar la arquitectura.

#### infraestructura

para la infraestructura, cree tres archivos:

"sql-producto-repositorio", siendo este el adaptador de salida, que contiene
todos los casos de uso adaptados a la tecnología usada en el proyecto que en
este caso es sql server.

"producto-controlador", siendo este el adaptador de entrada con todas las 
request http definidas manejando los errores correspondientes.

"producto-rutas", finalmente, aquí es donde hice toda la conexión mediante
la inyección de dependencias, primero conecté los adaptadores con los puertos, 
instancié el adaptador de salida de sql server, luego instancié el servicio 
del producto para conectarlo con "producto servicio",finalmente instancié el 
controlador y lo conecté con "producto-servicio",  tendiendo así ya toda la 
vinculación,porteriormente definí todas las rutas con sus métodos corresponientes 
(get,getById,post,put,delete).


 En fin, aquí lo que hice fue una separación de responsabilidades, todo
 lo correspondiente a base de datos, peticiones http, interfaces con casos
 de uso, todo esto separado en archivos diferentes para mayor escalabilidad
 y mantenibilidad







