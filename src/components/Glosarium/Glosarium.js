import React, { Component } from 'react';
import SideBar from './SideBar';
import Search from './Search';
import Content from './Content';

class Glosarium extends Component {
  render() {
    return (
      <div>
      <div id="glosarium">
        <div class="container container-padding">
            <div class="row">
                
                <SideBar />

                <div class="col-md-9 col-xs-12">
                    <div class="glosarium-wrapper">
                        
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