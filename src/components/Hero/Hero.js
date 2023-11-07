import './Hero.css';
import { Link } from 'react-router-dom';
import MensImg from '../../Assets/Images/mens-clothing.jpg'
import WomensImg from '../../Assets/Images/womens-clothing-1.jpg'
import ElectronicsImg from '../../Assets/Images/electronics.jpg'
import JeweleryImg from '../../Assets/Images/jewelery.jpg'

function Hero() {
  return (
    <section className="grid-images-container">
      <div className="grid-one">
        <Link to="/categories/mens">
          <div className="over-lay"></div>
          <img src={MensImg} alt="Mens-clothing" />
          <p className="grid-title">Men's Clothing</p>
        </Link>
      </div>
      <div className="grid-two">
        <Link to="/categories/womens">
          <div className="over-lay"></div>
          <img src={WomensImg} alt="Womens-clothing" />
          <p className="grid-title">Women's Clothing</p>
        </Link>
      </div>
      <div className="grid-three">
        <Link to="/categories/electronics">
          <div className="over-lay"></div>
          <img src={ElectronicsImg} alt="Electronics" />
          <p className="grid-title">Electronics</p>
        </Link>
      </div>
      <div className="grid-four">
        <Link to="/categories/jewelery">
          <div className="over-lay"></div>
          <img src={JeweleryImg} alt="Jewelery" />
          <p className="grid-title">Jewelery</p>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
