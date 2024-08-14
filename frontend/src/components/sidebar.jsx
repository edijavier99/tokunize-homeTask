import React from 'react';

const SidebarItem = ({ text, onClick, icon }) => (
    <li>
      <a href="#" onClick={() => onClick(text)} className="nav-link text-white d-flex align-items-center">
        <i className={`${icon} me-2`}></i>
        <span>{text}</span>
      </a>
    </li>
  );
 
const Sidebar = ({ items, onClickHandle }) => {
  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar`} style={{ minHeight: '100vh' }}>
      <a href="/" className="mx-auto d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 sidebar-title">Home</span>
        <i className={`fas fa-bars fs-4 sidebar-title-icon`} />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {items.map((item,index) => (
          <SidebarItem key={item.text} id={index} href={item.href} text={item.text} icon={item.icon} onClick={onClickHandle} />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export const SidebarAdmin = ({ onClickHandle }) => {

  const items = [
    {  href: '#', text: 'Newsletter List', icon: 'fas fa-clipboard-list' },
  ];

  return <Sidebar items={items} onClickHandle={onClickHandle} />;
};