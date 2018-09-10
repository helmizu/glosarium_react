import React, { Component } from 'react'
import { dataSelected, getData } from '../../actions/glosariumAction'
import { connect } from 'react-redux'
import { baseUrl } from '../../config'
import {withRouter} from 'react-router-dom'

export class Content extends Component {
    componentDidMount = () => {
        this.props.getData(this.props.match.params.label, this.props.match.params.component)
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.match.params !== this.props.match.params){
            this.props.getData(this.props.match.params.label, this.props.match.params.component)
      }
    }
    

    render() {
        return (
            <div>
                {this.props.labelSelected.length == 1 ? this.props.labelSelected.map(label => (
                    <div className="glosarium">
                        <div className="glosarium-title">
                            <h2>Glosarium / &nbsp;
                                    <span className="txt-grey">
                                    {label.label} /  &nbsp;{label.nama}
                                </span>
                            </h2>
                        </div>
                        <div className="glosarium-content" key={label._id}>
                            <ol>
                                <li>
                                    <div className="content">
                                        <h3 className="align-left">Pengertian</h3>
                                        <p className="align-left">{label.pengertian}</p>
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
                                        <p className="align-left">{label.penggunaan}</p>
                                    </div>
                                </li>
                            </ol>
                            <ul>
                                <li>
                                    <div className="content">
                                        <h3 className="align-left">TAGS</h3>
                                        <p className="align-left">{label.tags}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )) : this.props.labelSelected._id !== undefined
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
                                            <img src={this.props.labelSelected.ilustrasi ? `${baseUrl}/images/${this.props.labelSelected.ilustrasi}` : require("../../assets/img/Rectangle 4.svg")} alt="" />
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
                                            <p className="align-left">{
                                                this.props.labelSelected.tags ? this.props.labelSelected.tags.split(',').map(tag => <span className="tag">{tag}</span>) :
                                                ""
                                                }<span className="tag">Tags</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    labelSelected: state.glosarium.labelSelected,
})

const mapDispatchToProps =
{
    dataSelected,
    getData
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))