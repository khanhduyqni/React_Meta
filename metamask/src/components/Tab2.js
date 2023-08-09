import React, { useState } from 'react';
import './Tab1.css';
import './Section.css';
import close from './fav.icon/close.svg';
import more from './fav.icon/more-vertical.svg'
import add from './fav.icon/add.svg'
import ipt from './fav.icon/import.svg'
import hardware from './fav.icon/hardware.svg'
import arrowleft from './fav.icon/arrow-left.svg'
function Tab2({ onClose }) {
  const [activeNetwork, setActiveNetwork] = useState(null);
  const [showNewFrame, setShowNewFrame] = useState(false);
  const [showNewAccountFrame, setShowNewAccountFrame] = useState(false);
  const [showPopover, setShowPopover] = useState(true);
  const [showContent, setShowContent] = useState(true); // Thêm trạng thái showContent
  const [newAccountName, setNewAccountName] = useState(''); // Thêm trạng thái cho tên tài khoản

  const handleNetworkClick = (networkName) => {
    setActiveNetwork(networkName);
  };

  const handleCloseClick = () => {
    setShowPopover(false);
    onClose();
  };

  const handleAddAccountClick = () => {
    setShowNewAccountFrame(true);
    setShowNewFrame(false);
    setShowContent(false);
  };

  const handleArrowLeftClick = () => {
    setShowNewAccountFrame(false);
    setShowContent(true);
  };

  const handleNewAccountNameChange = (event) => {
    setNewAccountName(event.target.value);
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
      {showContent && (
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
              width: '16px',
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
        </div>)}
      <div className='pp-box-link'>
        <div className='pp-box--padding-4'>
          <button className='pp-button_base' onClick={handleAddAccountClick}>
            <img src={add} style={{
              width: '14px',
              height: '14px'
            }}></img>
            <span>Add account</span>
          </button>
        </div>
        <div className='pp-box--padding-4'>
          <button className='pp-button_base'>
            <img src={ipt} style={{
              width: '14px',
              height: '14px'
            }}></img>
            <span>Nhập tài khoản</span>
          </button>
        </div>
        <div className='pp-box--padding-4'>
          <button className='pp-button_base'>
            <img src={hardware} style={{
              width: '14px',
              height: '14px'
            }}></img>
            <span>Hardware wallet</span>
          </button>
        </div>
      </div>

      {showNewAccountFrame && (
        <div className='new-account-frame'>
          <section className='popover-wrap-newframe'>
            <div className='popover-header-newframe'>
              <div className='popover-header__title'>
                <button className='mm-button-icon1' onClick={handleArrowLeftClick}>
                  <img
                    src={arrowleft}
                    style={{
                      width: '16px',
                      height: '16px'
                    }}
                    alt='Arrow-Left Icon'
                  />
                </button>
                <h2 className='mm-text--heading'>Add account</h2>
                <button className='mm-button-icon1' onClick={handleCloseClick}>
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
            <div className='popover-content-newframe'>
              <div className='popover-form'>
                <form className='pp-form'>
                  <div className='mm-form-text-field'>
                    <label className='mm-label'>Tên tài khoản</label>
                    <div className='mm-form-text-field'>
                      <input
                        className='mm-input'
                        aria-invalid='true'
                        autoComplete='off'
                        placeholder='Tài khoản 3'
                        style={{ fontSize: '16px',paddingLeft: '20px' }} // Thêm phong cách tùy chỉnh cho placeholder
                        value={newAccountName}
                        onChange={handleNewAccountNameChange}
                      />
                    </div>
                    <p className={`mm-form-text_help-text ${newAccountName.length > 0 ? 'hidden' : ''}`}>Bắt buộc</p>
                    </div>
                  <div className='popover-btn'>
                    <button className='pp-btn1'>Hủy</button>
                    <button className='pp-btn'disabled={!newAccountName} type='submit'>Tạo</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>

  );
}

export default Tab2;
