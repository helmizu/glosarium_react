import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Glosarium from './Glosarium/Glosarium';

class GlosariumWrapper extends Component {
  render() {
    return (
      <div className="glosarium">
        <Navbar />
          <Glosarium />
        <Footer />
      </div>
    )
  }
}

export default GlosariumWrapper;