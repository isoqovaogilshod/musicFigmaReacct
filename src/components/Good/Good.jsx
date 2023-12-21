import style from "./Good.module.css";
import yellow from "../../../public/images/GoodImage/Yellow.png";
import bataryItem from "../../../public/images/GoodImage/bataryItem.png";
import bluetoothItem from "../../../public/images/GoodImage/bluetoothItem.png";
import microphoneItem from "../../../public/images/GoodImage/microphoneItem.png";
import goodbg from "../../../public/images/GoodImage/goodBg.png";
const Good = () => {
  return (
    <div className={style.Good}>
      <div className="container">
        <div className={style.goodpart}>
          <div className={style.goodText}>
            <h3>Good headphones and loud music is all you need</h3>
            <div className={style.items}>
              <div className={style.item}>
                <div className={style.itemImage}>
                  <img src={bataryItem} alt="bataryItem" />
                </div>
                <div className={style.itemText}>
                  <h4>Battery</h4>
                  <p>Battery 6.2V-AAC codec</p>
                  <a href="#">Lern More</a>
                </div>
              </div>
              <div className={style.item}>
                <div className={style.itemImage}>
                  <img src={microphoneItem} alt="microphoneItem" />
                </div>
                <div className={style.itemText}>
                  <h4>Bluetooth</h4>
                  <p>Battery 6.2V-AAC codec</p>
                  <a href="#">Lern More</a>
                </div>
              </div>
              <div className={style.item}>
                <div className={style.itemImage}>
                  <img src={bluetoothItem} alt="bluetoothItem" />
                </div>
                <div className={style.itemText}>
                  <h4>Microphone</h4>
                  <p>Battery 6.2V-AAC codec</p>
                  <a href="#">Lern More</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.goodImg}
            style={{
              backgroundImage: `url(${goodbg})`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              width:`65rem`,padding:`10rem`
            }}
          >
            <img src={yellow} alt="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
