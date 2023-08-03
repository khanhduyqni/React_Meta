import React, {  useState } from 'react';
import TabToken from './TabToken';
import TabNFT from './TabNFT';
import TabAct from './TabAct'
import './Section.css';
const List = () => {
  const [activeTab, setActiveTab] =  useState('tokens'); // Khởi tạo tab mặc định là 'tokens'

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="box-tabs">
        <ul className='box-tabs-list'>
            <li className={`box-tab-home-list ${activeTab === 'tokens' ? 'active' : ''}`}>
                <button className="box-box" onClick={() => handleTabClick('tokens')}>Tokens</button>
            </li>
            <li className={`box-tab-home-list ${activeTab === 'nfts' ? 'active' : ''}`}>
                <button className="box-box" onClick={() => handleTabClick('nfts')}>NFT</button>
            </li>
            <li className={`box-tab-home-list ${activeTab === 'activity' ? 'active' : ''}`}>
                <button className="box-box" onClick={() => handleTabClick('activity')}>Hoạt động</button>
            </li>
        </ul>
      <div className="box-tabs-content">
        {/* Hiển thị nội dung tương ứng với tab đang được chọn */}
        {activeTab === 'tokens' && <TabToken></TabToken>}
        {activeTab === 'nfts' && <TabNFT></TabNFT>}
        {activeTab === 'activity' && <TabAct></TabAct>}
      </div>
  </div>
  );
};

export default List;
