import Link from "next/link";
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__inner">
                <div className="footer__left">
                    <div className="footer__logo">
                        <img src="https://d1k8hez1mxkuxw.cloudfront.net/s/avatar_v2/LNwJX9/logo/61f5dae82d92d.png!d=Mw6FPX" alt="detective cleaning logo" />
                        <span>Proffessional cleaning services in Edmonton.</span>
                    </div>
                    <div className="footer__links">
                <ul className="links">
                  <li>
                    <a href=""  target={'_blank'}>
                      <img className="svg" src="img/svg/social/be.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href=""  target={'_blank'}>
                      <img
                        className="svg"
                        src="img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="" target={'_blank'}>
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
                    </div>
                    {/* <div className="footer__copyright">&copy; 2022 Detective Cleaning</div> */}
                </div>
                <div className="footer__right">
                    <ul className="footer__quick-links">
                        <li>Quick Links</li>
                        <li>
                            <Link href="/faqs">
                                <a>FAQs</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer__quick-contact">
                        <li>Contact Us</li>
                        <li className="email"><Link href="mailto:contact@example.com"><a>detectivecleaning@gmail.com</a></Link></li>
                        <li className="phone">+1 780 267 4665</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
