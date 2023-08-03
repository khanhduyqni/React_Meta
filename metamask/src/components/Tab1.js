import React, { useState } from 'react';
import './Tab1.css';
import './Section.css';
import close from './fav.icon/close.svg';
import eth from './eth_logo.png';
import linea from './linea-logo-mainnet.png';
import goerli from './Goerli1-logo.png';
import sepolia from './Sepolia-logo1.png';
import linea2 from './linea-logo-testnet.png';

function Tab1() {
  const [activeNetwork, setActiveNetwork] = useState(null);
  const [showNewFrame, setShowNewFrame] = useState(false);

  const handleNetworkClick = (networkName) => {
    setActiveNetwork(networkName);
  };

  const handleCloseClick = () => {
    setActiveNetwork(null);
  };

  const handleToggleClick = () => {
    setShowNewFrame(!showNewFrame);
  };

  return (
    <div className='popover-wrap-concept'>
      <div className='popover-header'>
        <div className='popover-header_title'>
          <h2 className='mm-text--heading'>Select a network</h2>
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
      <div className='popover-content'>
        <div className='multichain-network-list-menu'>
          {/* Existing networks */}
          <div
            className={`multichain-network-list-items ${activeNetwork === 'Ethereum Mainnet' ? 'selected' : ''}`}
            onClick={() => handleNetworkClick('Ethereum Mainnet')}
          >
            <div className='mm-avatar-base1'>
              <img src={eth} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt='Ethereum Logo' />
              <button className='mm-text--inherit'>Ethereum Mainnet</button>
            </div>
          </div>
          <div
            className={`multichain-network-list-items ${activeNetwork === 'Linea Mainnet' ? 'selected' : ''}`}
            onClick={() => handleNetworkClick('Linea Mainnet')}
          >
            <div className='mm-avatar-base1'>
              <img src={linea} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt='Linea Logo' />
              <button className='mm-text--inherit'>Linea Mainnet</button>
            </div>
          </div>
          {/* Show the new frame when toggle is ON */}
        {showNewFrame && (
          <div className='new-frame'>
            <div
              className={`multichain-network-list-items ${activeNetwork === 'Goerli' ? 'selected' : ''}`}
              onClick={() => handleNetworkClick('Goerli')}
            >
              <div className='mm-avatar-base1'>
                <img src={goerli} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt='Goerli Logo' />
                <button className='mm-text--inherit'>Goerli</button>
              </div>
            </div>
            <div
              className={`multichain-network-list-items ${activeNetwork === 'Sepolia' ? 'selected' : ''}`}
              onClick={() => handleNetworkClick('Sepolia')}
            >
              <div className='mm-avatar-base1'>
                <img src={sepolia} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt='Sepolia Logo' />
                <button className='mm-text--inherit'>Sepolia</button>
              </div>
            </div>
            <div
              className={`multichain-network-list-items ${activeNetwork === 'Linea Goerli' ? 'selected' : ''}`}
              onClick={() => handleNetworkClick('Linea Goerli')}
            >
              <div className='mm-avatar-base1'>
                <img src={linea2} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt='Linea Goerli Logo' />
                <button className='mm-text--inherit'>Linea Goerli</button>
              </div>
            </div>
          </div>
        )}
        <div className='box--padding-4'>
          <p className='mm-text--body-md'>Hiển thị các mạng thử nghiệm
            <label className='switch'>
              <input type='checkbox' checked={showNewFrame} onChange={handleToggleClick} />
              <span className='sliders round'></span>
            </label>
          </p>
        </div>
        </div>
        {/* Button "Thêm mạng" nằm ngoài khung "new-frame" */}
        <div className='box--paading-4-bottom'>
          <button className='box-button-base'>
            <span>Thêm mạng</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
