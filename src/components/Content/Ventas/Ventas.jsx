import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export const Ventas = () => {

    // const auth = useAuth();

    // useEffect(() => {
    //     getProductos();
    // }, []);

    // const [productos, setProductos] = useState([])

    // const getProductos = async () => {
    //     try {
    //         const { data } = await axios({
    //             method: 'GET',
    //             url: 'http://localhost:4000/api/ciclo3/product/',
    //             /* url: `${process.env.EndpointApi}/auth/google/login`, */
    //             // headers: {
    //             //     'Authorization': `Bearer ${auth.token}`
    //             // }
    //         });
    //         console.log(data);
    //         setProductos(data.product);

    //     } catch (error) {
    //         if (error.response.status === 401) {
    //             swal({
    //                 title: 'Error',
    //                 text: error.response.data.msg,
    //                 icon: 'error',
    //                 confirmButtonText: 'OK'
    //             });
    //         } else {
    //             swal({
    //                 title: 'Error',
    //                 text: error.response.data.msg,
    //                 icon: 'error',
    //                 confirmButtonText: 'OK'
    //             });
    //         }
    //     }
    // }

    return (
        <React.Fragment>
            <h2 className="mb-4">Gestion de Ventas</h2>

            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <NavLink class="badge badge-info" exact to="/home/AddVentas">
                    Agregar Venta
                </NavLink>

            </div>
            <div className="table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">ID Vendedor</th>
                            <th scope="col">Vendedor</th>
                            <th scope="col">Fecha de la Venta</th>
                            <th scope="col">CC Cliente</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Estado de la Venta</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.user}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.rol.name}</td>
                                    <td>
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                            <NavLink class="badge badge-info" exact to="/home/EditUser">
                                                Actualizar
                                            </NavLink>
                                            <NavLink class="badge badge-danger ml-4" exact to="/home/EditUser">
                                                Eliminar
                                            </NavLink>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        } */}
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}