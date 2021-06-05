import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="titulo">
          <h3>INICIAR SESIÓN</h3>
        </div>
        <form action="" method="post">
          <div className="email">
            <label>Email</label>

            <input
              type="email"
              name="email"
              id="eamil"
              placeholder="Ingrese su eamil"
            />
          </div>
          <div className="pass">
            <label>Contraseña</label>
            <input
              type="password"
              name="pass"
              id="eamil"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <input type="submit" value="Ingresar" />
        </form>
      </div>
    </div>
  );
}

export default Login;
