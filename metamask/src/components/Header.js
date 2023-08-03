import React, {Components} from 'react'
import logo1 from './logo.svg';

function Header() {
  return (
    <div className="App">
      <button className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <a>METAMASK</a>
      </button>
    </div>
  );
}


export default Header;