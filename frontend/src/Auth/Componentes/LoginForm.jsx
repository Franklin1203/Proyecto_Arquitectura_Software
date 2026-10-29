

//parte del view, formulario login

export default function LoginForm({ formulario, acciones, estado }) {

    return (
        <form onSubmit={acciones.loggear} >
            <h1 className="titulo-auth">Iniciar Sesión</h1>
            
                <input className="input-group" type="email" value={formulario.email} placeholder="Email" onChange={e => formulario.setEmail(e.target.value)} required />
                <input className="input-group" type="password" value={formulario.clave} placeholder="Clave" onChange={e => formulario.setClave(e.target.value)} required />
            
            <button className="auth-btn" disabled={estado.isLoggeando} type="submit">{estado.isLoggeando ? "Iniciando..." : "Entrar"}</button>
            {estado.errorLogin && <p className="error-auth">Credenciales incorrectas</p>}
        </form>
    )


}