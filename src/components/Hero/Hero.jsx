import style from "./Hero.module.css";
import immage from "../../../public/images/HeroImages/Immage.png";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroLeft}>
        <img src={immage} alt="immage" />
      </div>
      <div className={style.heroRight}>
        <h3>Hear it. Feel it</h3>
        <h1>Move with the music</h1>
        <div className={style.nums}>
          <h5>$ 435</h5>
          <span></span>
          <h6>$ 465</h6>
        </div>
        <button>BUY NOW</button>
      </div>
    </div>
  );
};

export default Hero;
