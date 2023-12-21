import style from "./Product.module.css";
import right from '../../assets/icons/right.svg'
import left from '../../assets/icons/left.svg'
import red from '../../../public/images/ProductsImages/red.png'
import blue from '../../../public/images/ProductsImages/blue.png'
import orange from '../../../public/images/ProductsImages/orange.png'
const Products = () => {
  return (
    <div className={style.products}>
      <div className="container">
        <h2>Our Latest colour collection 2021</h2>
        <div className={style.productsPart}>
            <img src={right} alt="right" />
            <div className={style.headPhones}>

            <img src={red} alt="red" className={style.red}/>
            <img src={blue} alt="blue" className={style.blue} />
            <img src={orange} alt="orange" className={style.orange}/>
            </div>
            <img src={left} alt="left" />
        </div>
      </div>
    </div>
  );
};

export default Products;
