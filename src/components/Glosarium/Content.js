import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div>
                <div class="glosarium">
                    <div class="glosarium-title">
                        <h2>Glosarium /
                                    <span class="txt-grey">CSS / Padding</span>
                        </h2>
                    </div>
                    <div class="glosarium-content">
                        <ol>
                            <li>
                                <div class="content">
                                    <h3 class="align-left">Pengertian Coding</h3>
                                    <p class="align-left">Padding adalah properti yang digunakan untuk menghasilkan ruang di sekitar konten
                                                elemen, dan berada dalam batasan yang ditentukan.</p>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <h3 class="align-left">Ilustrasi Coding</h3>
                                    <p class="align-left">Padding adalah properti yang digunakan untuk menghasilkan ruang di sekitar konten
                                                elemen, dan berada dalam batasan yang ditentukan.</p>
                                    <img src={require("../../assets/img/Rectangle 4.svg")} alt="" />
                                    <label for="">Gambar CSS 1.1 Ilustrasi Padding</label>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <h3 class="align-left">Penggunaan Coding</h3>
                                    <p class="align-left">Padding digunakan untuk lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum</p>
                                </div>
                            </li>
                        </ol>
                        <ul>
                            <li>
                                <div class="content">
                                    <h3 class="align-left">TAGS</h3>
                                    <p class="align-left">Padding digunakan untuk lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
