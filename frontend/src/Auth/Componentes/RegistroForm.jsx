
//parte del view, formulario registro
export default function RegistroForm({formulario,acciones,estado}){

    return(
        <form onSubmit={acciones.registrar}>
            <h1 className="titulo-auth">Registrarse</h1>
            <input className="input-group" type="text" value={formulario.nombre} placeholder="nombre" onChange={e=> formulario.setNombre(e.target.value)} required/>
            <input className="input-group" type="email" value={formulario.email} placeholder="email" onChange={e=> formulario.setEmail(e.target.value)} required/>
            <input className="input-group" type="password" value={formulario.clave} placeholder="clave" onChange={e=> formulario.setClave(e.target.value)} required/>

            <button className="auth-btn" disabled={estado.isRegistrando} type="submit">{estado.isRegistrando ? "Registrando..." : "Registrarse"}</button>
            {estado.errorRegistro && <p className="error">Faltan datos</p>}
        </form>
    )


}