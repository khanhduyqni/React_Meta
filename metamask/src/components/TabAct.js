import React from 'react';
import './Section.css';
import message from './fav.icon/message-question.svg'
function TabAct() {
  return (
    <div className='box-act-content'>
        <div className='transaction-list'>
            <div className='transaction-list_transaction'>
                <div className='transaction-list_completed-transaction'>
                    <div className='transaction-list_empty'>
                        <div className='transaction-list_empty-text'>
                        Bạn không có giao dịch nào
                        </div>
                    </div>
                </div>
            </div>
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
  );
}

export default TabAct;
