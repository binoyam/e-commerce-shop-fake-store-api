import './Hero.css';
import { Link } from 'react-router-dom';
import MensImg from '../../Assets/Images/mens-clothing.jpg'
import WomensImg from '../../Assets/Images/womens-clothing-1.jpg'
import ElectronicsImg from '../../Assets/Images/electronics.jpg'
import JeweleryImg from '../../Assets/Images/jewelery.jpg'

function Hero() {
  return (
    <section className="grid-images-container">
      <div className="grid grid-one">
        <Link to="/categories/mens-clothing">
          <div className="over-lay one"></div>
          <img className='men' src={MensImg} alt="Mens-clothing" />
          <p className="grid-title">Men's Clothing</p>
        </Link>
      </div>
      <div className="grid grid-two">
        <Link to="/categories/womens-clothing">
          <div className="over-lay two"></div>
          <img className='women' src={WomensImg} alt="Womens-clothing" />
          <p className="grid-title">Women's Clothing</p>
        </Link>
      </div>
      <div className="grid grid-three">
        <Link to="/categories/electronics">
          <div className="over-lay three"></div>
          <img className='electronics' src={ElectronicsImg} alt="Electronics" />
          <p className="grid-title">Electronics</p>
        </Link>
      </div>
      <div className="grid grid-four">
        <Link to="/categories/jewelery">
          <div className="over-lay four"></div>
          <img className='jewelery' src={JeweleryImg} alt="Jewelery" />
          <p className="grid-title">Jewelery</p>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
