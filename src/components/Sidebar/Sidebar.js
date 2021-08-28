import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { FaPiggyBank } from 'react-icons/fa';
import { BiBitcoin } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const items = {
  dashboard: { icon: <RiDashboardLine />, link: '/' },
  savings:  { icon: <FaPiggyBank />, link: '/savings' },
  crypto:  { icon: <BiBitcoin />, link: '/crypto' },
  add:  { icon: <IoAddOutline />, link: '/add' },
};

const Siderbar = () => {
  const subMenu = { title: 'Dashboard' };
  return (
    <div className="sidebar">
      <div className="menu">
        {Object.values(items).map(item => {
          return (
            <Link className="svg-box" to={item.link}>
              {item.icon}
            </Link>
          );
        })}
      </div>
      <div className="sub-menu">
        <div className="menu-picked">
          {items[subMenu.title.toLowerCase()].icon}
          {`${subMenu.title}`}
        </div>
        <div className="catagory-summary">Total $: bla.0</div>
      </div>
    </div>
  );
};

export default Siderbar;
