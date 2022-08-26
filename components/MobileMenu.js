import { useState } from "react";
import Link from "next/link";
import LargeButton from "./Buttons/Lrg-Button";
import { useRouter } from "next/dist/client/router";
const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__container">
        <div className="mobile-menu__in">
          <div className="mobile-menu__logo">
            <Link href="/">
            <a>
              <img src="https://d1k8hez1mxkuxw.cloudfront.net/s/avatar_v2/LNwJX9/logo/61f5dae82d92d.png!d=Mw6FPX" alt="detective cleaning logo" />
            </a>
            </Link>
          </div>
          <div className="trigger" onClick={() => setToggle(!toggle)}>
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
          <li>
              <Link href="/residential">
                <a className={router.pathname == "/residential" ? "active" : ""}>
                  Residential Cleaning
                </a>
              </Link>
            </li>
            <li>
              <Link href="/commercial">
                <a className={router.pathname == "/commercial" ? "active" : ""}>
                  Commercial Cleaning
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname == "/about" ? "active" : ""}>
                  About
                </a>
              </Link>
            </li>

            <li>
              <Link href="/blog">
                <a className={router.pathname == "/blog" ? "active" : ""}>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.pathname == "/contact" ? "active" : ""}>
                  Contact
                </a>
              </Link>
            </li>
            <li>
                <LargeButton title="Book Now" url="/book-now"/>
              {/* <button className="header__btn">Book Now</button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;