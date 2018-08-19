import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div>
                <div class="col-md-3 col-xs-12">
                    <div class="side-nav">
                        <div class="top-nav">
                            <h2>Dokumentasi Arkademy</h2>
                        </div>
                        <div class="content-nav">
                            <ul>
                                <a href="">
                                    <li>HTML</li>
                                </a>
                                <a href="">
                                    <li class="active">CSS</li>
                                </a>
                                <ul class="dropdown-ul">
                                    <li>Padding</li>
                                    <li>Margin</li>
                                    <li>Direktori</li>
                                    <li>Kode Hexa</li>
                                    <li>Hover</li>
                                </ul>
                                <a href="">
                                    <li>JavaScript</li>
                                </a>
                                <a href="">
                                    <li>PHP</li>
                                </a>
                                <a href="">
                                    <li>MySQL</li>
                                </a>
                                <a href="">
                                    <li>NodeJs</li>
                                </a>
                                <a href="">
                                    <li>MongoDB</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
