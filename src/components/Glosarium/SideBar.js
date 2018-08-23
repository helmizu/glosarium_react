import React, { Component } from 'react';
import { getAllData, getCollection } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ChildSidebar from './ChildSidebar'

export class SideBar extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        data: PropTypes.array.isRequired,

        getCollection: PropTypes.func.isRequired,
    }

    componentWillMount = () => {
        this.props.getCollection()
        this.props.getAllData()
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevProps.label !== this.props.label) {
    //         this.props.getData(this.props.label)
    //     }
    // }

    // onLabelClicked = (label) => {
    //     this.props.setLabel(label)
    // }
    handleClick = (e) => {
        e.target.className === '' ? e.target.className = 'active' : e.target.className = ''
    }

    render() {
        return (
            <div>
                <div className="col-md-3 col-xs-12 col-sm-3">
                    <div className="side-nav">
                        <div className="top-nav">
                            <h2>Dokumentasi Arkademy</h2>
                        </div>
                        <div className="content-nav">
                            <ul>
                                {/* 
                                <li onClick={() => this.onLabelClicked('HTML')} className="active">HTML</li>
                                <ul className="dropdown-ul">
                                    
                                        this.props.label === 'HTML' ?
                                            this.props.data.map(dt => (
                                                <li>{dt.nama}</li>
                                            )
                                            ) : null
                                    
                                </ul>
                                */}

                                {
                                    this.props.label.map(label => (
                                        <li onClick={this.handleClick} 
                                            className='' 
                                            key={label.info.uuid}>
                                            {label.name}
                                                        
                                            <ChildSidebar value={label.name} />
                                                                                       
                                        </li>
                                    ))
                                }

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
    getCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)