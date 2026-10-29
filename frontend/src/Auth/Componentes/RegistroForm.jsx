export default function LoginForm({formulario,acciones,estado}){

    return(
        <form onSubmit={acciones.registrar}>
            <h2>Registrarse</h2>
            <input type="text" value={formulario.nombre} placeholder="nombre" onChange={e=> formulario.setNombre(e.target.value)} required/>
            <input type="email" value={formulario.email} placeholder="email" onChange={e=> formulario.setEmail(e.target.value)} required/>
            <input type="password" value={formulario.clave} placeholder="clave" onChange={e=> formulario.setClave(e.target.value)} required/>

            <button disabled={estado.isRegistrando} type="submit">{estado.isRegistrando ? "Registrando..." : "Registrarse"}</button>
            {estado.errorRegistro && <p className="error">Faltan datos</p>}
        </form>
    )


}