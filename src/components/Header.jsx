import React from 'react';
import { Link } from 'react-router-dom';
import infoIcon from '../assets/images/icon-view.png';

function Header() {
  const linksStyle = {
    color: 'blue',
    textDecoration: 'none',
  };

  return (
    <div>
      <style jsx>{`
        h1 {
          height: 80px;
          border: 1px solid black;
          border-bottom: 4px solid black;
          border-radius: 10px 10px 15px 15px;
          margin-top: -8px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: -moz-linear-gradient(top, #e6f0a3 0%, #d2e638 50%, #c3d825 51%, #dbf043 100%);
          background: -webkit-linear-gradient(top, #e6f0a3 0%,#d2e638 50%,#c3d825 51%,#dbf043 100%);
          background: linear-gradient(to bottom, #e6f0a3 0%,#d2e638 50%,#c3d825 51%,#dbf043 100%);
        }
        img {
          width: 50px;
          height: 50px;
        }
        .nav-links {
          text-align: right;
          padding-right: 10px;
        }
        #header-bottom {
          max-width: 1100px;
          margin: 0 auto;
        }
      `}</style>
      <h1><img src={infoIcon} />Help Queue!</h1>
      <div id="header-bottom">
        <div className="nav-links">
          <Link to="/" style={linksStyle}>Home</Link> | <Link to="/newticket" style={linksStyle}>Create Ticket</Link>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Header;
