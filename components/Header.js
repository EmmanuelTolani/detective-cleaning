import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import LargeButton from "./Buttons/Lrg-Button";
const Header = () => {
  const router = useRouter();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link href="/">
            <a className="header__logo-logo">
              <img
                src={`https://d1k8hez1mxkuxw.cloudfront.net/s/avatar_v2/LNwJX9/logo/61f5dae82d92d.png!d=Mw6FPX`}
                alt="detective cleaning logo"
              />
            </a>
          </Link>
        </div>
        <div className="header__menu">
          <ul className="header__nav">
            {/* <li>
                <Link href="/">
                    <a className={router.pathname == "/" ? "active" : ""}>Home</a>
                </Link>
            </li> */}
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
          <span className="ccc" />
        </div>
      </div>
    </div>
  );
};
export default Header;
