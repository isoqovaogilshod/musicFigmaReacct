import style from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import backgroundImage from "../../../public/images/HeroImages/Background.png";
const Header = () => {
  return (
    <>
      <header>
        <div
          className={style.header}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            paddingBottom: `10rem`,
          }}
        >
          <div className="container">
            <Navbar />
            <Hero />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
