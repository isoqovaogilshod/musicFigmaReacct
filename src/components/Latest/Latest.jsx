import style from "./Latest.module.css";
import pink from "../../../public/images/LatestImages/Pink.png";
import blue from "../../../public/images/LatestImages/blue.png";
import green from "../../../public/images/LatestImages/green.png";
import star from "../../../public/images/LatestImages/Star.png";
const Latest = () => {
  return (
    <div className={style.latest}>
      <div className="container">
        <h3>Our Latest Product</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          facilisis nunc ipsum aliquam, ante.{" "}
        </h5>
        <div className={style.headphones}>
          <div className={style.headPhone}>
            <img src={pink} alt="pink" />
            <div className={style.starsNum}>
              <div className={style.stars}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <span>4.50</span>
            </div>
            <div className={style.textNum}>
              <h4>Read Headphone</h4>
              <p>$ 256</p>
            </div>
          </div>
          <div className={style.headPhone}>
            <img src={blue} alt="blue" />
            <div className={style.starsNum}>
              <div className={style.stars}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <span>4.50</span>
            </div>
            <div className={style.textNum}>
              <h4>Blue Headphone</h4>
              <p>$ 235</p>
            </div>
          </div>
          <div className={style.headPhone}>
            <img src={green} alt="green" />
            <div className={style.starsNum}>
              <div className={style.stars}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <span>4.50</span>
            </div>
            <div className={style.textNum}>
              <h4>Green Headphone</h4>
              <p>$ 245</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
