import React from "react";
import Header from "../template/Header-usuario";


//css
import "../assets/css/Login.css";
//url api
import { Apiurl } from "../services/apirest";

//libreria
import axios from 'axios';


class Login extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    form: {
      "usuario": "",
      "password": ""
    },
    error: false,
    errorMsg: ""
  }

  manejadorSubmit = e => {
    e.preventDefault();
  }

  manejadorChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  manejadorBoton = ()=> {
    let url = Apiurl + "auth";
    axios.post(url, this.state.form)
    .then( response => {
      if (response.data.status === "ok") {
        localStorage.setItem("token", response.data.result.token);
        this.props.history.push("/pacientes");     
      }else{
        this.setState({
          error: true,
          errorMsg: response.data.result.error_msg
        })
      }
      console.log(response);
    }).catch(e => {
      console.log(e);
      this.setState({
        error: true,
        errorMsg: "Error"
      })

    });
  }


  render() {
    return (
      <div className="container">
        <Header/>
        <div className="login">
          <div className="titulo">
            <h3>INICIAR SESIÓN</h3>
          </div>
          <form onSubmit={this.manejadorSubmit}>
            <div className="email">
              <input
                type="email"
                name="usuario"
                placeholder="Ingrese su email"
                onChange={this.manejadorChange}
              />
            </div>
            <div className="pass">
              <input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                onChange={this.manejadorChange}
              />
            </div>
            <input type="submit" value="Ingresar" onClick= { this.manejadorBoton } />
          </form>
          {this.state.error === true &&
            <div className="error">
              {this.state.errorMsg}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Login;
