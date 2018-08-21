import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container container-padding color-white">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <h4>
                                    <b>TENTANG ARKADEMY</b>
                                </h4>
                                <ul>
                                    <li>
                                        <a>Tentang Kami</a>
                                    </li>
                                    <li>
                                        <a>Kontak Kami</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h4>
                                    <b>PRODUK ARKADEMY</b>
                                </h4>
                                <ul>
                                    <li>
                                        <a>Modul Belajar</a>
                                    </li>
                                    <li>
                                        <a>Forum Diskusi</a>
                                    </li>
                                    <li>
                                        <a>Beasiswa Bootcamp</a>
                                    </li>
                                    <li>
                                        <a>Dashboard Monitoring</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h4>
                                    <b>INFORMASI LAIN</b>
                                </h4>
                                <ul>
                                    <li>
                                        <a>Masuk</a>
                                    </li>
                                    <li>
                                        <a>Daftar</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h4>
                                    <b>SOCIAL MEDIA</b>
                                </h4>
                                <div className="sosmed">
                                    <a>
                                        <div className="logo">
                                            <img src={require("../assets/img/instagram.svg")} alt="instagram Arkademy" />
                                        </div>
                                    </a>
                                    <a>
                                        <div className="logo left-40 left-25">
                                            <img src={require("../assets/img/facebook.svg")} alt="facebook Arkademy" />
                                        </div>
                                    </a>
                                    <a>
                                        <div className="logo left-40 left-25">
                                            <img src={require("../assets/img/youtube.svg")} alt="youtube Arkademy" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <div className="container container-padding">
                        <div className="text">©
                        <b>2018 Arkademy.</b> All Rights Reserved
                    </div>
                        <div className="text right float-right">
                            <span className="footer-text">
                                <img src={require("../assets/img/phone.svg")} alt="phone" /> +62 811 184 8182 (Call / WA)
                            </span>
                            <span className="footer-text">
                                <img src={require("../assets/img/close-envelope.svg")} alt="phone" /> hello@arkademy.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
