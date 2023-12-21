import style from "./Box.module.css";
import boxHeadphone from "../../../public/images/BoxImages/boxHeadphone.png";
import right from "../../../public/images/BoxImages/right.png";
const Box = () => {
  return (
    <div className={style.box}>
      <div className="container">
        <div className={style.boxPart}>
          <div className={style.boxImage}>
            <img src={boxHeadphone} alt="boxHeadphone" />
          </div>
          <div className={style.boxText}>
            <h3>Whatever you get in the box</h3>
            <div className={style.parts}>
              <div className={style.part}>
                <img src={right} alt="right" />
                <p>5A Charger</p>
              </div>
              <div className={style.part}>
                <img src={right} alt="right" />
                <p>Extra battery</p>
              </div>
              <div className={style.part}>
                <img src={right} alt="right" />
                <p>Sophisticated bag</p>
              </div>
              <div className={style.part}>
                <img src={right} alt="right" />
                <p>User manual guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
