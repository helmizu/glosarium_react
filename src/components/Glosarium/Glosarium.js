import React, { Component } from 'react';
import SideBar from './SideBar';
import Search from './Search';
import Content from './Content';
import { isMobile, isBrowser } from 'react-device-detect';
import { Route, Switch } from "react-router-dom";


export class Glosarium extends Component {

    contentLoad = () => {
        if (isMobile) {
            return <div id="glosarium">
                <div className="container container-padding">
                    <div className="row">

                        <Search />

                        <SideBar />

                        <div className="col-md-9 col-xs-12 col-sm-9 col-lg-9">
                            <div className="glosarium-wrapper">
                                <Switch>
                                    <Route path="/:label/:component" component={Content} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (isBrowser) {
            return <div id="glosarium">
                <div className="container container-padding">
                    <div className="row">

                        <SideBar />

                        <div className="col-md-9 col-xs-12 col-sm-9 col-lg-9">
                            <div className="glosarium-wrapper">

                                <Search />

                                <Route path="/:label/:component" component={Content} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    render() {
        return (
            <div>
                {this.contentLoad()}
            </div>
        )
    }
}

export default Glosarium