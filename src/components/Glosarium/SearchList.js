import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataSelected } from '../../actions/glosariumAction'

export class SearchList extends Component {
    constructor(props){
        super(props)
    }

    selectData = (data) => {
        this.props.dataSelected(data)
    }

    render() {
        return (
            <ul className={this.props.searchListed.length > 0 ? "search-list" : null} style={this.props.isFocus === true ? {'display' : 'block'} : {'display' : 'none'} }>
                {this.props.searchListed.map(dt => (
                    <li onClick={() => this.selectData(dt)} key={dt._id}>{dt.nama}</li>
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
