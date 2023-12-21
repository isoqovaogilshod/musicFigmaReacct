import style from "./Footer.module.css";
import logo from "../../assets/icons/navLogo.svg";
import instagram from "../../../public/images/FooterImages/instagram.png";
import twitter from "../../../public/images/FooterImages/twitter.png";
import facebook from "../../../public/images/FooterImages/facebook.png";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footerPart}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={style.links}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
            </ul>
          </div>
          <div className={style.icons}>
            <div className={style.img}>
              <img src={instagram} alt="instagram" />
            </div>
            <div className={style.img}>
              <img src={twitter} alt="twitter" />
            </div>
            <div className={style.img} style={{paddingLeft:`2.2rem`,paddingRight:`2.2rem`}}>
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
