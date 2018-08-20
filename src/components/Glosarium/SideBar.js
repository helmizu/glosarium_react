import React, { Component } from 'react';
import { getAllData, getData, setLabel } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: "",
            label: ""
        }
        this.onLabelClicked = this.onLabelClicked.bind(this)
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        getData: PropTypes.func.isRequired,
        getAllData: PropTypes.func.isRequired,
        setLabel: PropTypes.func.isRequired,
    }

    componentDidUpdate = () => {
        this.props.getData(this.props.label)
    }

    onLabelClicked = (label) => {
        this.props.setLabel(label)
    }

    render() {
        const { nama, label } = this.state
        
        return (
            <div>
                <div class="col-md-3 col-xs-12">
                    <div class="side-nav">
                        <div class="top-nav">
                            <h2>Dokumentasi Arkademy</h2>
                        </div>
                        <div class="content-nav">
                            <ul>
                                <li onClick={() => this.onLabelClicked('HTML')} className="active">HTML</li>
                                <ul className="dropdown-ul">
                                    {
                                        this.props.label == 'HTML' ?
                                        this.props.data.map(dt => (
                                            <li>{dt.nama}</li>
                                        )
                                        ) : null
                                    }
                                </ul>
                                <li onClick={() => this.onLabelClicked('CSS')} className="active">CSS</li>
                                <ul className="dropdown-ul">
                                    {
                                        this.props.label == 'CSS' ?
                                        this.props.data.map(dt => (
                                            <li>{dt.nama}</li>
                                        )
                                        ) : null
                                    }
                                </ul>

                                <li className="active">javaScript</li>
                                <ul className="dropdown-ul">
                                    {
                                        this.props.label == 'JS' ?
                                        this.props.data.map(dt => (
                                            <li>{dt.nama}</li>
                                        )
                                        ) : null
                                    }
                                </ul>

                                <li className="active">PHP</li>
                                <ul className="dropdown-ul">
                                    {
                                        this.props.label == 'PHP' ?
                                        this.props.data.map(dt => (
                                            <li>{dt.nama}</li>
                                        )
                                        ) : null
                                    }
                                </ul>

                                <li>MySQL</li>

                                <li>NodeJs</li>

                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.glosarium.data,
    label: state.glosarium.label
})

const mapDispatchToProps =
{
    getAllData,
    getData,
    setLabel
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)