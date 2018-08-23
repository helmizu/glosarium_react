import React, { Component } from 'react';
import SideBar from './SideBar';
import Search from './Search';
import Content from './Content';

class Glosarium extends Component {
  render() {
    return (
      <div>
      <div id="glosarium">
        <div className="container container-padding">
            <div className="row">

                <SideBar />

                <div className="col-md-9 col-xs-12 col-sm-9">
                    <div className="glosarium-wrapper">
                        
                        <Search />
                        
                        <Content />

                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Glosarium