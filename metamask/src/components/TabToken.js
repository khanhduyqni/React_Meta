import React from 'react';
import './Section.css';
import lgo from './eth_logo.png';
import add from './fav.icon/add.svg';
import refresh from './fav.icon/refresh.svg';
import message from './fav.icon/message-question.svg';

function TabToken() {
  return (
    <div>
      <div className='box-tabs-content'>
        <div className='mm-box-multichain-token'>
          <div className='mm-badge-wrapper'>
            <div className='mm-avatar-base'>
              <img
                src={lgo}
                className='big'
                style={{
                  borderRadius: '50%',
                  width: '18.750px',
                  height: '18.750px',
                }}
                alt='ETH Logo'
              />
            </div>
            <div className='mm-badge-wrapper'>
              <img
                src={lgo}
                className='small'
                style={{
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                }}
                alt='ETH Logo'
              />
            </div>
          </div>
          <div className='mm-box'>
            <p className='mm-box-text'>Ethereum</p>
            <p className='mm-text'>O ETH</p>
          </div>
        </div>
    </div>
      <div className='multichain-import-token-link'>
        <div className='box-box-token'>
          <button className='mm-button-base'>
            <img src={add} alt='Add Icon' />
            <span className='mm-icon'>Nhập token</span>
          </button>
        </div>
        <div className='box-box-token'>
          <button className='mm-button-base'>
            <img src={refresh} alt='Refresh Icon' />
            <span className='mm-icon'>Làm mới danh sách</span>
          </button>
        </div>
        <div className='box-box-token'>
          <button className='mm-button-base'>
            <img src={message} alt='Message Icon' />
            <a href='https://support.metamask.io/hc/vi' target='_blank' rel='noopener noreferrer'>
              <span className='mm-icon'>Hỗ trợ về MetaMask</span>
            </a>
          </button>
        </div>
      </div>
  </div>
  );
}

export default TabToken;
