import React, { Component } from 'react';

var brand = require('../assets/img/logo arkademy-tech academy-03.svg')

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default nav-edit">
                    <div className="container container-padding">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand navbar-brand-edit">
                                <img alt="Brand" src={brand}/>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="dropdown">
                                    <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Produk Kami
                            <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="">Action</a>
                                        </li>
                                        <li>
                                            <a href="">Another action</a>
                                        </li>
                                        <li>
                                            <a href="">Something else here</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="">Separated link</a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="">One more separated link</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">Tentang Kami</a>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="" className="button btn-border-oren">Masuk</a>
                                </li>
                                <li>
                                    <a href="" className="button btn-oren">Daftar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
