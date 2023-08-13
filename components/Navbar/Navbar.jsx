import React, { useState } from "react";

import Link from "next/link";
import {
  BsFillHouseDoorFill,
  BsEnvelopeFill,
  BsTelephoneForwardFill,
} from "react-icons/bs";

import { MenusStyle, NavbarStyle } from "./Navbar.style";

const Menus = (props) => {
  const { menuActive } = props;

  return (
    <MenusStyle menuActive={menuActive}>
      <ul className="menu-wrapper">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </MenusStyle>
  );
};

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <NavbarStyle menuActive={menuActive}>
      <article className="navbar-content">
        <h3 className="logo">
          Jahangir Khan <span>.</span>
        </h3>

        <article
          className="menu-icon"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
        </article>

        <article className="contact-content-wrapper">
          <figure className="contact-content">
            <span className="icon">
              <BsFillHouseDoorFill />
            </span>
            <figcaption>
              <h4 className="heading">Address</h4>
              <p className="detail">Example England</p>
            </figcaption>
          </figure>

          <figure className="contact-content">
            <span className="icon">
              <BsEnvelopeFill />
            </span>
            <figcaption>
              <h4 className="heading">Email US</h4>
              <p className="detail">jahangirjay5@gmail.com</p>
            </figcaption>
          </figure>

          <article className="phone-details">
            <div className="icon-wrapper">
              <span className="icon">
                <BsTelephoneForwardFill />
              </span>
            </div>
            <p className="phone-no"> +1-234-000-2345</p>
          </article>
        </article>
      </article>
      <Menus menuActive={menuActive} />
    </NavbarStyle>
  );
}

export default Navbar;
