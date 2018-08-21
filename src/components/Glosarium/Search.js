import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <div className="search">
                    <input type="text" placeholder="Cari kata-kata yang ingin kamu pahami.." />
                    <img className="img-search-input" src={require("../../assets/img/search-2.svg")} alt="search" />
                </div>
            </div>
        )
    }
}
