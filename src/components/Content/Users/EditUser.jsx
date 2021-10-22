import React, { Component } from 'react'

export const EditUser = () => {

    return (
        <React.Fragment>
            <h2 className="mb-4">Actualización de Usuarios</h2>
            <hr />
            <div className="card col-md-8 mx-auto">
                <div className="card-body">
                <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="user">user</label>
                        <input type="text" className="form-control" id="user" value="Hola"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">phone</label>
                        <input type="number" className="form-control" id="phone" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="rol">rol</label>
                        <select id="rol" className="form-control">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="status">status</label>
                        <input type="text" className="form-control" id="status" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="idGoogleSession">idGoogleSession</label>
                        <input type="text" className="form-control" id="idGoogleSession" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary float-right">Actualizar</button>
            </form>
                </div>
            </div>
        </React.Fragment>
    )

}

export default EditUser
