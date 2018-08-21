import React, { Component } from 'react'
import { dataSelected } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Content extends Component {

    static propTypes = {
        labelSelected: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div>
                {this.props.labelSelected._id !== undefined
                    ? <div className="glosarium">
                        <div className="glosarium-title">
                            <h2>Glosarium / &nbsp;
                                    <span className="txt-grey">
                                    {this.props.labelSelected.label} /  &nbsp;{this.props.labelSelected.nama}
                                </span>
                            </h2>
                        </div>
                        <div className="glosarium-content" key={this.props.labelSelected._id}>
                            <ol>
                                <li>
                                    <div className="content">
                                        <h3 className="align-left">Pengertian</h3>
                                        <p className="align-left">{this.props.labelSelected.pengertian}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h3 className="align-left">Ilustrasi</h3>
                                        <img src={require("../../assets/img/Rectangle 4.svg")} alt="" />
                                        <label>Gambar CSS 1.1 Ilustrasi Padding</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h3 className="align-left">Penggunaan</h3>
                                        <p className="align-left">{this.props.labelSelected.penggunaan}</p>
                                    </div>
                                </li>
                            </ol>
                            <ul>
                                <li>
                                    <div className="content">
                                        <h3 className="align-left">TAGS</h3>
                                        <p className="align-left">{this.props.labelSelected.tags}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : null

                }

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    labelSelected: state.glosarium.labelSelected
})

const mapDispatchToProps =
{
    dataSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)