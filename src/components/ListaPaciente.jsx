import React from "react";
import Header from "../template/Header-usuario";

//css
import "../assets/css/ListaPaciente.css";
//url api
import { Apiurl } from "../services/apirest";

//libreria
import axios from 'axios';

class ListaPaciente extends React.Component {

    state = {
        pacientes: [],
    }

    componentDidMount() {
        let url = Apiurl + "pacientes?page=1";
        axios.get(url)
            .then(response => {
                this.setState({
                    pacientes: response.data
                });
            })
    }


    render() {
        return (
            <div className="container-listaPacinete">
                <Header />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre y Apellido</th>
                                <th>Número teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pacientes.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.nombre_completo}</td>
                                        {value.numero_telefono.charAt(0) !== "0" 
                                        ? <td>{"0" + value.numero_telefono}</td>
                                        : <td>{ value.numero_telefono}</td>
                                        }
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }




}

export default ListaPaciente;