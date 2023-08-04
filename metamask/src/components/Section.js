import React, { useState, useRef, useEffect } from 'react'
import './Section.css';
import lgo from './eth_logo.png';
import fav from './fav.icon/arrow-down.svg';
import more from './fav.icon/more-vertical.svg';
import copy from './fav.icon/copy.svg';
import add from './fav.icon/add.svg';
import arrow from './fav.icon/arrow-2-up-right.svg'
import swap from './fav.icon/swap-horizontal.svg';
import bridge from './fav.icon/bridge.svg';
import diagram from './fav.icon/diagram.svg';
import List from './List'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
function Section() {
    const [activeTab, setActiveTab] = useState(null);
    const popoverRef = useRef(null);

    const handleTabClick = (tabName) => {
        setActiveTab((prevActiveTab) => (prevActiveTab === tabName ? null : tabName));
    };


    // useEffect(() => {
    //     // Xử lý sự kiện khi người dùng nhấp chuột bên ngoài khung con
    //     const handleClickOutside = (event) => {
    //       if (popoverRef.current && !popoverRef.current.contains(event.target)) {
    //         setActiveTab(null);
    //       }
    //     };

    // Đăng ký sự kiện khi component được mount và hủy đăng ký khi component bị unmount
    // document.addEventListener('click', handleClickOutside);

    // Thêm console.log() để kiểm tra
    //     console.log('handleClickOutside is registered.');

    //     return () => {
    //       document.removeEventListener('click', handleClickOutside);
    //     };
    //   }, []);
    return (
        <div className='Container'>
            <div className='slider'>
                <div className='head-slider'>
                    <div className='tab-container'>
                        <div className={`tab ${activeTab === 'Tab1' ? 'active' : ''}`}>
                            <button className='logo' onClick={() => handleTabClick('Tab1')}>
                                <img src={lgo}
                                    style={{
                                        borderRadius: '50%',
                                    }}></img>
                                <p>Ethereum Mainnet</p>
                                <img src={fav}></img>
                            </button>
                            {activeTab === 'Tab1' && (
                                <div className='popover-wrap popover-tab1'>
                                    <Tab1 />
                                </div>
                            )}
                        </div>

                        <div className={`tab ${activeTab === 'Tab2' ? 'active' : ''}`}>
                            <button className='account' onClick={() => handleTabClick('Tab2')}>
                                <div className='mm-avtatar-account'>
                                    <svg x='0' y='0' width='16' height='16' className='rounded-svg'>
                                        <rect x='0' y='0' width='16' height='16' transform='translate(-0.23089400121079215 4.012750031472015) rotate(165.4 8 8)' fill='#188CF2'></rect>
                                        <rect x='0' y='0' width='16' height='16' transform='translate(0.15026451180710063 -6.302670465269929) rotate(344.7 8 8)' fill='#FA8500'></rect>
                                        <rect x='0' y='0' width='16' height='16' transform='translate(7.064173132965704 10.241027787744542) rotate(213.3 8 8)' fill='#F5D400'></rect>
                                    </svg>
                                </div>
                                <span className='mm-text1'>Account 1</span>
                                <img src={fav}
                                    style={{
                                        width: '16px',
                                        height: '16px'
                                    }}></img>
                            </button>
                            {activeTab === 'Tab2' && (
                                <div className='popover-wrap popover-tab2'>
                                    <Tab2 />
                                </div>
                            )}
                        </div>

                        <div className={`tab ${activeTab === 'Tab3' ? 'active' : ''}`}>
                            <button className='left-fav-slider' onClick={() => handleTabClick('Tab3')}>
                                <img src={more} className='mm-fav'
                                    style={{
                                        width: '16px',
                                        height: '16px'
                                    }}></img>
                            </button>
                            {activeTab === 'Tab3' && (
                                <div className='popover-wrap popover-tab3'>
                                    <Tab3 />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                

                <div className='content-slider'>
                    <div className='main-container'>
                        <div className='home-balance-wrapper'>
                            <div className='wallet-overview'>
                                <button className='ww-text'>
                                    <span>0xeCE...C144 </span>
                                    <img src={copy} className='ww-fav'
                                        style={{
                                            width: '16px',
                                            height: '16px',
                                        }}></img>
                                </button>
                            </div>
                            <div className='eth-overview'>
                                <span className='currency-display-component'>0 ETH</span>
                            </div>
                            <div className='wallet-overview-buttons'>
                                <button className='icon-eth-button'>
                                    <img src={add}></img>
                                    <p>Mua</p>
                                </button>
                                <button className='icon-eth-button'>
                                    <img src={arrow}></img>
                                    <p>Gửi</p>
                                </button>
                                <button className='icon-eth-button'>
                                    <img src={swap}></img>
                                    <p>Hoán đổi</p>
                                </button>
                                <a href='https://portfolio.metamask.io/bridge?metametricsId=0xb783e75dfaddfe6adec75d1eb6c29c5e1e410117d2803c9f809dbb3f47cd' target='-blank'>
                                    <button className='icon-eth-button'>
                                        <img src={bridge}></img>
                                        <p>Bridge</p>
                                    </button>
                                </a>
                                <a href='https://portfolio.metamask.io/?metamaskEntry=ext_portfolio_button&metametricsId=0xb783e75dfaddfe6adec75d1eb6c29c5e1e410117d2803c9f809dbb3f47cd00bf' target='-blank'>
                                    <button className='icon-eth-button'>
                                        <img src={diagram}></img>
                                        <p>Danh mục đầu tư</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mm-box'>
                    <div className='box-tabs'>
                        <List></List>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;

