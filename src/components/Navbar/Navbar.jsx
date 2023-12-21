import style from "./Navbar.module.css";
import navlogo from "../../assets/icons/navLogo.svg";
import search from "../../assets/icons/search.svg";
import assets from "../../assets/icons/assets.svg";
import user from "../../assets/icons/user.svg";
import burger from "../../assets/icons/burger.svg";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className="logo">
        <img src={navlogo} alt="navlogo" />
      </div>
      <div className={style.icons}>
        <div className={style.img}>
          <img src={search} alt="search" />
        </div>
        <span></span>
        <div className={style.img}>
          <img src={assets} alt="assets" />
        </div>
        <span></span>
        <div className={style.img}>
          <img src={user} alt="user" />
        </div>
      </div>
      <div className={style.burger}>
        <img src={burger} alt="burger" />
      </div>
    </div>
  );
};

export default Navbar;
