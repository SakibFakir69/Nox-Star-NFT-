import React, { useRef } from "react";
import navCss from "./../nav/Nav.module.css";

function Navbar() {
  const menu = useRef(null);

  const menuHandeler = () => {
    menu.current.classList.toggle(navCss.activeMenu);
  };

  return (
    <nav className={navCss.Nav_wrapper}>
      {/* Logo */}
      <div className={navCss.logo}>
        <a href="#">NoxStar</a>
      </div>

      {/* Menu */}
      <ul ref={menu} className="">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Road Map</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Buttons and Hamburger */}
      <div className={navCss.NavBtns}>
        <button className="btn">
          <i className="ri-discord-line"></i> Discord
        </button>
        <button className="btn">
          <i className="ri-wallet-line"></i> Contact
        </button>

        <i
          onClick={menuHandeler}
          id={navCss.bars}
          className="ri-menu-line"
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
