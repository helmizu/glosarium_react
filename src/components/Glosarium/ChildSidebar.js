import React, { Component } from 'react'
import { getData, getAllData } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class ChildSidebar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            label : '',
            isOpen : true
        }
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        getData: PropTypes.func.isRequired,
    }
    
    render() {
        return (
            <ul className="dropdown-ul">
                {
                    this.props.data.map(dt => (
                        this.props.value === dt.label ?
                        <li key={dt._id}>{dt.nama}</li>
                        : null
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.glosarium.data,
})

const mapDispatchToProps =
{
    getData,
    getAllData
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildSidebar)