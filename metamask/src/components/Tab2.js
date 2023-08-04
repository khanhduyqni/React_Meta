import React, { useState } from 'react';
import './Tab1.css';
import './Section.css';
import close from './fav.icon/close.svg';
import more from './fav.icon/more-vertical.svg'
import add from './fav.icon/add.svg'
import ipt from './fav.icon/import.svg'
import hardware from './fav.icon/hardware.svg'
function Tab2() {
  const [activeNetwork, setActiveNetwork] = useState(null);
  const [showNewFrame, setShowNewFrame] = useState(false);
  const [showNewAccountFrame, setShowNewAccountFrame] = useState(false); // New state for the new account frame


  const handleNetworkClick = (networkName) => {
    setActiveNetwork(networkName);
  };

  const handleCloseClick = () => {
    setActiveNetwork(null); 
  };

  const handleAddAccountClick = () => {
    setShowNewAccountFrame(true); // Show the new account frame when "Add account" is clicked
    setShowNewFrame(false); // Hide the existing frame when "Add account" is clicked
  };
  return (
    <div className='popover-wrap-concept'>
      <div className='popover-header'>
        <div className='popover-header_title'>
          <h2 className='mm-text--heading'>Chọn một tài khoản</h2>
          <button className='mm-button-icon' onClick={handleCloseClick}>
            <img
              src={close}
              style={{
                width: '16px',
                height: '16px',
              }}
              alt='Close Icon'
            />
          </button>
        </div>
      </div>
      <div className='popover-bg'>
        <div class="multichain-account-menu-popover__list">
            <div className='mm-avatar-account_jazzicon'>
                <svg x="0" y="0" width="24" height="24">
                    <rect x="0" y="0" width="24" height="24" transform="translate(-0.34634100181618827 6.019125047208023) rotate(165.4 12 12)" fill="#188CF2"></rect>
                    <rect x="0" y="0" width="24" height="24" transform="translate(0.22539676771065098 -9.454005697904893) rotate(344.7 12 12)" fill="#FA8500"></rect>
                    <rect x="0" y="0" width="24" height="24" transform="translate(10.596259699448556 15.361541681616815) rotate(213.3 12 12)" fill="#F5D400"></rect>
                </svg>
            </div>
            <div className='multichain-account-list-item__content'>
                <div className='pp-box'>
                    <div className='multichain-account-list-item__account'>
                        <button className='pp-button-base'>
                            <span>Account 1</span>
                        </button>
                    </div>
                    <div className='multichain-account-list-item__asset'>
                        <div className='currency-display-component'>
                            <span class="currency-display-component__prefix"></span>
                            <span className='currency-display-component__text'>$0.00 </span>
                            <span className='currency-display-component__suffix'>USD</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mm-icon2' style={{
                width:'16px',
                height: '16px',
                marginLeft: '270px',
                marginTop: '-20px'
            }}>
                <img src={more}></img>
            </div>
            <div className='multichain-account-list-item__content2'>
                <div className='pp-box2'>
                    <div className='multichain-account-list-item__account'>
                        <button className='pp-button-base'>
                            <span>0xece...c144</span>
                        </button>
                    </div>
                    <div className='multichain-account-list-item__asset'>
                        <div className='currency-display-component2'>
                            <span class="currency-display-component__prefix"></span>
                            <span className='currency-display-component__text'>0 </span>
                            <span className='currency-display-component__suffix'>ETH</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='pp-box-link'>
        <div className='pp-box--padding-4'>
            <button className='pp-button_base'onClick={handleAddAccountClick}>
              <img src={add} style={{
                width:'14px',
                height: '14px'
              }}></img>
              <span>Add account</span>
            </button>
        </div>
        <div className='pp-box--padding-4'>
            <button className='pp-button_base'>
              <img src={ipt} style={{
                width:'14px',
                height: '14px'
              }}></img>
              <span>Nhập tài khoản</span>
            </button>
        </div>
        <div className='pp-box--padding-4'>
            <button className='pp-button_base'>
              <img src={hardware} style={{
                width:'14px',
                height: '14px'
              }}></img>
              <span>Hardware wallet</span>
            </button>
        </div>
      </div>
      {showNewAccountFrame && (
        <div className='new-account-frame'>
          {/* Add the JSX content for the new account frame here */}
          <h2>Create a New Account</h2>
          {/* ... Input and buttons for creating new account ... */}
        </div>
      )}
    </div>
  );
}

export default Tab2;
