import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { getUsres } from '../../../services/Users.service';
import swal from 'sweetalert';

export const User = () => {

    const auth = useAuth();

    useEffect(() => {
        getUsers();
    }, []);

    const [users, setusers] = useState([])

    const getUsers = async () => {
        try {
            const { data } = await getUsres(auth.token);

            console.log(data);

            setusers(data.users);

        } catch (error) {
            if (error.response.status === 401) {
                swal({
                    title: 'Error',
                    text: error.response.data.msg,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } else {
                swal({
                    title: 'Error',
                    text: error.response.data.msg,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    }


    return (
        <React.Fragment>
            <h2 className="mb-4">Gestion de Usuarios</h2>
            <div className="table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <th scope="row">{ index + 1}</th>
                                    <td>{ user.user}</td>
                                    <td>{ user.name}</td>
                                    <td>{ user.email}</td>
                                    <td>{ user.rol.name}</td>
                                    <td>Boton</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </React.Fragment>
    )
}
