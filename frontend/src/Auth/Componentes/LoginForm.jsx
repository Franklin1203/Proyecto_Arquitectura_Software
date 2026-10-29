

export default function LoginForm({formulario,acciones,estado}){

    return(
        <form onSubmit={acciones.loggear}>
            <h2>Iniciar Sesion</h2>
            <input type="email" value={formulario.email} placeholder="Email" onChange={e=> formulario.setEmail(e.target.value)} required/>
            <input type="password" value={formulario.clave} placeholder="Clave" onChange={e=> formulario.setClave(e.target.value)} required/>

            <button disabled={estado.isLoggeando} type="submit">{estado.isLoggeando ? "Iniciando..." : "Entrar"}</button>
            {estado.errorLogin && <p className="error">Credenciales incorrectas</p>}
        </form>
    )


}