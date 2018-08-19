import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <div class="search">
                    <input type="text" placeholder="Cari kata-kata yang ingin kamu pahami.." />
                    <img class="img-search-input" src={require("../../assets/img/search-2.svg")} alt="search" />
                </div>
            </div>
        )
    }
}
