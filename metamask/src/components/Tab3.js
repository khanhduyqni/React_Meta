import React, { useState } from 'react';
import './Tab3.css';
import './Section.css'
import connect from './fav.icon/connect.svg'
import diagram from './fav.icon/diagram.svg'
import message from './fav.icon/message-question.svg'
import setting from './fav.icon/setting.svg'
import lock from './fav.icon/lock.svg'

function Tab3() {
  return (
    <div className="centered-popover">
      <div className='menu_container'>
        <div className='items'>
          <button className='menu_items'>
            <img src={connect}
              style={{
                width: '16px',
                height: '16px',
              }}></img>
          </button>
          <p>Trang web đã kết nối</p>
        </div>
        <div className='items'>
          <button className='menu_items'>
            <img src={diagram}
              style={{
                width: '16px',
                height: '16px',
              }}></img>
          </button>
          <p>Portfolio view</p>
        </div>
        <div className='items'>
          <button className='menu_items'>
            <img src={message}
              style={{
                width: '16px',
                height: '16px',
              }}></img>
          </button>
          <p>Hỗ trợ</p>
        </div>
        <div className='items'>
          <button className='menu_items'>
            <img src={setting}
              style={{
                width: '16px',
                height: '16px',
              }}></img>
          </button>
          <p>Cài đặt</p>
        </div>
        <div className='items'>
          <button className='menu_items'>
            <img src={lock}
              style={{
                width: '16px',
                height: '16px',
              }}></img>
          </button>
          <p>Lock MetaMask</p>
        </div>
      </div>
    </div>
  );
}

export default Tab3;
