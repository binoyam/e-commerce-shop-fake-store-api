import "./Hero.css";
import { Link } from "react-router-dom";
import MensImg from "../../Assets/Images/mens-clothing-1.jpg";
import WomensImg from "../../Assets/Images/womes-clothing.jpg";
import ElectronicsImg from "../../Assets/Images/electronics-1.jpg";
import JeweleryImg from "../../Assets/Images/jewelery-1.jpg";

function Hero() {
  return (
    <section className="grid-images-container">
      <div className="grid men-grid">
        <Link to="/categories/mens-clothing">
          <div className="over-lay one"></div>
          <img className="men-grid-img" src={MensImg} alt="Mens-clothing" />
          <p className="grid-title">Men's Clothing</p>
        </Link>
      </div>
      <div className="grid women-grid">
        <Link to="/categories/womens-clothing">
          <div className="over-lay two"></div>
          <img
            className="women-grid-img"
            src={WomensImg}
            alt="Womens-clothing"
          />
          <p className="grid-title">Women's Clothing</p>
        </Link>
      </div>
      <div className="grid etrn-grid">
        <Link to="/categories/electronics">
          <div className="over-lay three"></div>
          <img
            className="electronics-grid-img"
            src={ElectronicsImg}
            alt="Electronics"
          />
          <p className="grid-title">Electronics</p>
        </Link>
      </div>
      <div className="grid jwl-grid">
        <Link to="/categories/jewelery">
          <div className="over-lay four"></div>
          <img className="jewelery-grid-img" src={JeweleryImg} alt="Jewelery" />
          <p className="grid-title">Jewelery</p>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
