import React from 'react';
import './Section.css';
import info from './fav.icon/info.svg';
import nft from './fav.icon/no-nfts.svg'
import add from './fav.icon/add.svg'
import setting from './fav.icon/setting.svg';
import message from './fav.icon/message-question.svg'
function TabToken() {
  return (
   <div className='mm-box-nfts-tab'>
    <div className='box-nfts-detection-notice'>
        <div className='message-dialog'>
            <div className='box-message'>
                <div className='box-padding-top-1'>
                    <span className='box-info-circle'>
                        <img src={info}
                        style={{
                            width: '18px',
                            height: '18px'
                        }}></img>
                    </span>
                </div>
                <div className='box-padding-left-2'>
                    <h6 className='nfts-text'>Mới! Phát hiện NFT</h6>
                    <h6 className='nfts-text-bottom'>Cho phép MetaMask tự động phát hiện NFT từ OpenSea và hiển thị trên ví MetaMask của bạn.</h6>
                    <a className='btn-link'>Bật phát hiện NFT trong phần Cài Đặt</a>
                </div>
            </div>
        </div>
    </div>
    <div className='me-box'>
        <div className='me-box-img'>
            <img src={nft}></img>
        </div>
        <div className='nfts-tabs-link'>
            <h4 className='me-text-heading'>No NFTs yet</h4>
            <a className='me-button-base' href='https://support.metamask.io/hc/en-us/articles/360058238591-NFT-tokens-in-MetaMask-wallet' target='_blank'>Tìm hiểu thêm</a>
        </div>
    </div>
    <div className='nfts-tabs-button'>
        <div className='box-box-token'>
            <button className='mm-button-base'>
                <img src={add} alt='Add Icon' />
                <span className='mm-icon'>Nhập token</span>
            </button>
        </div>
        <div className='box-box-token'>
            <button className='mm-button-base'>
                <img src={setting} alt='Refresh Icon' />
                <span className='mm-icon'>Bật tự động phát hiện</span>
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
