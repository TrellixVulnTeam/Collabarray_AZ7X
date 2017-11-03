import React, { Component } from 'react';
import './Header.css'
import 'bootstrap-social';



class Header extends Component {

  render() {
    return (
      <div className="Header">
        
        <nav className="navbar navbar-default">

            <div className="container-fluid col-sm-6 col-md-6">
              <div className="navbar-header">
                <a className="navbar-brand" >Collabarray</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a >Home</a></li>
                <li><a >Page 1</a></li>
                <li><a >Page 2</a></li>
                <li><a >Page 3</a></li>
              </ul>
            </div>

            
              {this.props.authenticated 
              ?
              (<div className="container-fluid col-sm-6 col-md-6">
              <ul className="nav navbar-nav">
                <li className="active"><a >Home</a></li>
                <li><a >Page 1</a></li>
                <li><a >Page 2</a></li>
                <li><a >Page 3</a></li>
              </ul>
              </div>)
              :
              null
              }
            

        </nav>

      </div>
    );
  }
}

export default Header;
