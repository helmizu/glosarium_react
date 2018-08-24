import React, { Component } from 'react'
import { getData, getAllData, dataSelected } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
        getData: PropTypes.func.isRequired,
        dataSelected : PropTypes.func.isRequired
    }

    selectData = (data) => {
        this.props.dataSelected(data)
        console.log(data)
    }
    
    render() {
        return (
            <ul className="dropdown-ul">
                {
                    this.props.data.map(dt => (
                        this.props.value === dt.label ?
                        <li onClick={() => this.selectData(dt)} key={dt._id}>{dt.nama}</li>
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
    getData,
    getAllData,
    dataSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildSidebar)