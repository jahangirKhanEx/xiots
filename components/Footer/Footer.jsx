import React from "react";
import {
  BsFolder,
  BsFillHouseDoorFill,
  BsFillEnvelopeOpenFill,
  BsTelephoneFill,
} from "react-icons/bs";

import { BiWorld } from "react-icons/bi";

import {
  FacebookIcon,
  InstaIcon,
  LinkdenIcon,
  TwitterIcon,
} from "../../svg/index";
import { FooterBottomStyle, FooterStyle } from "./Footer.style";

const FooterBottom = () => {
  return (
    <FooterBottomStyle>
      <article className="footer-bottom-container">
        © Copyrights 2023 JahangirKhan. All Rights Reserved
      </article>
    </FooterBottomStyle>
  );
};

function Footer() {
  return (
    <FooterStyle>
      <article className="footer-container">
        <article className="footer-content">
          <h3 className="heading">
            JahangirKhan<span>.</span>
          </h3>

          <p className="description">
            Search for will uncover many web sites variables onto of passages of
            lorem ipsum available but the majority the words all predefined
            humour to met chunks recently with desktop.
          </p>

          <ul className="socail-site">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkdenIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstaIcon />
              </a>
            </li>
          </ul>
        </article>

        <article className="footer-content">
          <h3 className="heading">Quick Links</h3>

          <ul className="footer-menus">
            <li>
              <a href="#">
                <span className="icon">
                  <BsFolder />
                </span>

                <p className="text">About Us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <BsFolder />
                </span>

                <p className="text">Our Services</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <BsFolder />
                </span>

                <p className="text">Featured Blog</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <BsFolder />
                </span>

                <p className="text">Car Fleet</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <BsFolder />
                </span>

                <p className="text">FAQ</p>
              </a>
            </li>
          </ul>
        </article>

        <article className="footer-content">
          <h3 className="heading">Contact Info</h3>

          <ul className="footer-menus">
            <li>
              <a>
                <span className="icon">
                  <BsFillHouseDoorFill />
                </span>

                <p className="text">Rawalpindi, Pakistan</p>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <BsFillEnvelopeOpenFill />
                </span>

                <p className="text">jahangirjay5@gmail.com</p>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <BsTelephoneFill />
                </span>

                <p className="text">+92 3115506699</p>
              </a>
            </li>
            <li>
              <a href="https://jahangirkhan.vercel.app/" target="_blank">
                <span className="icon">
                  <BiWorld />
                </span>

                <p className="text">jahangirkhan.vercel.app</p>
              </a>
            </li>
          </ul>
        </article>
      </article>
      <FooterBottom />
    </FooterStyle>
  );
}

export default Footer;
