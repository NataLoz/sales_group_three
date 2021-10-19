import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    <i className="fa fa-bars"></i>
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" exact to="/home/Sales">
                                Gestion de ventas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" exact to="/home/Products">
                                Gestion de productos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" exact to="/home/User">
                                Gestion de Usuarios y Roles
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
