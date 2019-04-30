import React from 'react';
import { Link } from 'react-router-dom';
import infoIcon from '../assets/images/icon-view.png';

function Header() {
  return (
    <div>
      <style jsx>{`
      h1 {
        border: 4px solid black;
        background-color: yellow;
        display: flex;
        align-items: center;
      }
      img {
        width: 50px;
        height: 50px;
      }
    `}</style>
      <h1><img src={infoIcon} />Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
