import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export const EditProductos = () => {

    // const auth = useAuth();

    // useEffect(() => {
    //     getProductos();
    // }, []);

    // const [productos, setProductos] = useState([])

    // const getProductos = async () => {
    //     try {
    //         const { data } = await axios({
    //             method: 'POST',
    //             url: 'http://localhost:4000/api/ciclo3/product/new',
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
            <h2 className="mb-4">Editar Producto</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body"></div>
                <form>
                    <div class="mb-3">
                        <label for="producto" class="form-label">Nombre del producto:</label>
                        <input type="text" class="form-control" id="nombreProducto" />
                    </div>

                    <div class="mb-3">
                        <label for="valor" class="form-label">Valor unitario:</label>
                        <input type="text" class="form-control" id="valorUnitario" placeholder="$" />
                    </div>

                    <div class="form-check">
                        <label for="estado" class="form-label">Seleccione estado del producto:</label>
                        <br />
                        <input class="form-check-input" type="radio" name="estado" id="disponible" />
                        <label class="form-check-label" for="disponible">
                            Disponible
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="estado" id="noDisponible" checked />
                        <label class="form-check-label" for="noDisponible">
                            No disponible
                        </label>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Actualizar Producto</button>
                    <br /> <br />
                    <button type="submit" class="btn btn-primary">Cancelar</button>

                </form>
            </div>

        </React.Fragment>
    )
}