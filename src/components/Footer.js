import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="container container-padding color-white">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <h4>
                                    <b>TENTANG ARKADEMY</b>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="#">Tentang Kami</a>
                                    </li>
                                    <li>
                                        <a href="#">Kontak Kami</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <h4>
                                    <b>PRODUK ARKADEMY</b>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="#">Modul Belajar</a>
                                    </li>
                                    <li>
                                        <a href="#">Forum Diskusi</a>
                                    </li>
                                    <li>
                                        <a href="#">Beasiswa Bootcamp</a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard Monitoring</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <h4>
                                    <b>INFORMASI LAIN</b>
                                </h4>
                                <ul>
                                    <li>
                                        <a href="#">Masuk</a>
                                    </li>
                                    <li>
                                        <a href="#">Daftar</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <h4>
                                    <b>SOCIAL MEDIA</b>
                                </h4>
                                <div class="sosmed">
                                    <a href="#">
                                        <div class="logo">
                                            <img src={require("../assets/img/instagram.svg")} alt="instagram Arkademy" />
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="logo left-40 left-25">
                                            <img src={require("../assets/img/facebook.svg")} alt="facebook Arkademy" />
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="logo left-40 left-25">
                                            <img src={require("../assets/img/youtube.svg")} alt="youtube Arkademy" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="copyright">
                    <div class="container container-padding">
                        <div class="text">©
                        <b>2018 Arkademy.</b> All Rights Reserved
                    </div>
                        <div class="text right float-right">
                            <span class="footer-text">
                                <img src={require("../assets/img/phone.svg")} alt="phone" /> +62 811 184 8182 (Call / WA)
                            </span>
                            <span class="footer-text">
                                <img src={require("../assets/img/close-envelope.svg")} alt="phone" /> hello@arkademy.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
