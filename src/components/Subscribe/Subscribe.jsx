import style from "./Subscribe.module.css";
import SubscribeBg from "../../../public/images/subscribeImages/subBackground.png";
const Subscribe = () => {
  return (
    <div className={style.Subscribe}>
      <div className="container">
        <div
          className="subscribeBg"
          style={{
            backgroundImage: `url(${SubscribeBg})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            width: `110rem`,
          }}
        >
          <div className={style.pinkBg}>
            <h3>Subscribe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
            <form>
              <input type="text" placeholder="Enter Your email address" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
