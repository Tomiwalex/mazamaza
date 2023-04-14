import React, { useContext } from "react";
import logo from "../images/footerlogo.svg";
import { Link } from "react-router-dom";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import { AppContext } from "../App";

const Footer = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="footers">
      <div className="container">
        <div className="footer">
          <div className="div1">
            <img src={logo} />
            <a href="tel:+2349169365132" target="_blank">
              +2349169365132
            </a>
            <a href="mailto:info@mazamazastores.com" target="_blank">
              info@mazamazastores.com
            </a>
          </div>

          <div className="div2">
            <h2>QUICK LINKS</h2>
            <Link
              onClick={() => setProductHeading("Featured Products")}
              to="/featuredproduct"
            >
              Featured Products
            </Link>

            <Link
              onClick={() => setProductHeading("Featured Shops")}
              to="/featuredproduct"
            >
              featured Shops
            </Link>

            <Link
              onClick={() => setProductHeading("Top Brands")}
              to="/featuredproduct"
            >
              Top Brands
            </Link>

            <Link
              onClick={() => setProductHeading("Trending Products")}
              to="/featuredproduct"
            >
              Trending Products
            </Link>
            {/* <Link to=''>Clearance Sale</Link> */}
            {/* <Link to=''>Sitemap</Link> */}
          </div>

          <div className="div3">
            <h2>Sell with Us</h2>
            <Link to="">Become a Seller</Link>
            <Link to="">Advertise with Us</Link>
            <Link to="">Affiliates</Link>
          </div>

          <div className="div4">
            <h2>Get to Know Us</h2>
            {/* <Link to=''>FAQs</Link> */}
            {/* <Link to=''>Blog</Link> */}
            <Link to="">Privacy Policies</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>

          <div className="div5">
            <h2>Social Media</h2>
            <a
              href="https://www.instagram.com/mazamaza_stores/?hl=en"
              target="_blank"
              className="f-jc-sb"
            >
              <img src={instagram} />
              <p>Mazamaza instagram</p>
            </a>

            <a
              href="https://www.facebook.com/Mazamazastores?mibextid=ZbWKwL"
              target="_blank"
              className="f-jc-sb"
            >
              <img src={facebook} />
              <p>Mazamaza facebook</p>
            </a>

            <a
              href="https://twitter.com/mazamazastores?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              className="f-jc-sb"
            >
              <img src={twitter} />
              <p>Mazamaza twitter</p>
            </a>

            <a
              href="https://www.youtube.com/@mazamazastores"
              target="_blank"
              className="f-jc-sb"
            >
              <img src={youtube} />
              <p>Mazamaza youtube</p>
            </a>

            <a
              href="https://linkedin.com/in/mazamaza-stores-7065a7260"
              target="_blank"
              className="f-jc-sb"
            >
              <img src={linkedin} />
              <p>Mazamaza linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
