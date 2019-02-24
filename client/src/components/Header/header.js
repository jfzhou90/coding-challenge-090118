import React, { Component } from 'react';

class Header extends Component {  
  render() {
    return (
      <div style={{backgroundColor:"black"}}>
        <div className="row">
          <h1 className="col-md-12 text-center" style={{color:"white"}}>Universal Contacts</h1>
        </div>
      </div>
    );
  }
}

export default Header