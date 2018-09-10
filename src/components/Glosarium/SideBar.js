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
    
    handleClick = (e) => {
        if (e.target.className === 'dropdown-ul') {
        } else {
            e.target.className === '' ? e.target.className = 'active' : e.target.className = ''
        }
    }

    render() {
        return (
            <div>
                <div className="col-md-3 col-xs-12 col-sm-3 col-lg-3">
                    <div className="side-nav">
                        <div className="top-nav">
                            <h2>Dokumentasi Arkademy</h2>
                        </div>
                        <div className="content-nav">
                            <ul>
                                {
                                    this.props.label.map(label => (
                                        <li onClick={this.handleClick}
                                            className=''
                                            name='sidebarParent'
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