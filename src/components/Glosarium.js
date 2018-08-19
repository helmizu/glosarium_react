import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Glosarium extends Component {
  render() {
    return (
      <div className="glosarium">
        <Navbar />
        <Footer />
      </div>
    )
  }
}

export default Glosarium;