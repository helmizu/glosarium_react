import React, { Component } from 'react'
import {getAllData, dataSelected } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";

export class ChildSidebar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            label : '',
            isOpen : true
        }
        this.selectData = this.selectData.bind(this)
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        dataSelected : PropTypes.func.isRequired
    }

    selectData = (data) => {
        this.props.dataSelected(data)
    }
    
    render() {
        return (
            <ul className="dropdown-ul">
                {
                    this.props.data.map(dt => (
                        this.props.value === dt.label ?
                        <li key={dt._id}><Link to={`/${dt.label}/${dt.nama}`}>{dt.nama}</Link></li>
                        : null
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.glosarium.data
})

const mapDispatchToProps =
{
    getAllData,
    dataSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildSidebar)