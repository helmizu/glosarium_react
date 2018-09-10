import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataSelected } from '../../actions/glosariumAction'
import {Link} from 'react-router-dom'

export class SearchList extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <ul className={this.props.searchListed.length > 0 ? "search-list" : null} style={this.props.isFocus === true ? {'display' : 'block'} : {'display' : 'none'} }>
                {this.props.searchListed.map(dt => (
                    <Link to={`/${dt.label}/${dt.nama}`}><li key={dt._id}>{dt.nama}</li></Link>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    searchListed: state.glosarium.searchListed
})

const mapDispatchToProps =
{
    dataSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)
