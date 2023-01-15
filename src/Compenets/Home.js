import React from 'react'
import './Home.css'
import Product from './Product'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71wob537DmL._SX3000_.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          //
          alt=""
        /> */}
        <Carousel
          className="home__image"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <Link to="/">
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71wob537DmL._SX3000_.jpg"
                alt=""
              />
            </div>
          </Link>

          <Link to="/">
            <div>
              <img src="http://links.papareact.com/6ff" alt="" />
            </div>
          </Link>

          <Link to="/">
            <div>
              <img src="http://links.papareact.com/7ma" alt="" />
            </div>
          </Link>
        </Carousel>
        <div className="home__row">
          <Product 
            id="12484409"
            Product="SNODE Rowing"
            title="SNODE WR77 Water Rowing Machine with Bluetooth, "
            price={539.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61D9L1JZQyL._AC_SL1500_.jpg"
          />
          <Product
            id="1484409"
            Product="	Nestle Nespresso"
            title="Nespresso Vertuo Coffee and Espresso Machine "
            price={60.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71+7-4d4rlL._AC_SL1500_.jpg"
          />
          <Product
            id="4409"
            Product="Mobo Cruiser"
            title="Mobo Triton Pro Adult Tricycle Trike. Pedal 3-Wheel Bike"
            price={599.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bwCThHjGL._AC_SX679_.jpg"
          />
          <Product
            id="84409"
            Product="SOVMIKU"
            title="Solar WiFi Battery Power Security Camera,3MP 360°"
            price={89.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61DUWF5xg5L._AC_SX466_.jpg"
          />
          <Product
            id="309"
            Product="Iron Flask"
            title="Sports Water Bottle  Leak Proof, Vacuum Insulated"
            price={26.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71mvub7gP4L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12080499"
            Product="DoSmarter "
            title="DoSmarter Fitness Tracker, Lightweight Smartwatch with 24/7 Blood Pressure Heart Rate Blood Oxygen Monitor, Sleep Tracker, Pedometer, Calories Counter, Waterproof Fitness Watch for Women Men"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/615WiVJCsnL._AC_SX679_.jpg"
          />
          <Product
            id="124867499"
            Product="Paladone Playstation "
            title="Paladone Playstation White Controller Alarm Clock, Regular, Multicolor"
            price={29.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/71d46PSA6JL._AC_SL1500_.jpg"
          />
          <Product
            id="12484609"
            Product="OverTwice"
            title="OverTwice Slow Masticating Juicer Cold Press Juice Extractor Apple Orange Citrus Juicer Machine with Wide Chute Quiet Motor for Fruit Vegetables"
            price={129.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61KiExLNGsL._AC_SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            Product="Brand:BR Gold Jewerly"
            title="Ethiopian Big Coin Cross Pendant Necklace Women Gold Plated Jewelry"
            price={130.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71dJZ-By5UL._AC_UL1200_.jpg"
          />
          <Product
            id="12321"
            Product="LITTLE CHONK"
            title="Dog Backpack Carrier by LITTLE CHONK -  Comfortable, Black"
            price={110.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/412O41LHmmL._SR420,420_.jpg"
          />
          <Product
            id="12321341"
            Product="Ameliade Aquarium"
            title="Artificial Plastic Plants , Pink Cherry Blossom Tree & Grass Aquarium,"
            price={10.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81vZJHYYYkS._AC_SX522_.jpg"
          />

          <Product
            id="12321341"
            Product="MILIFUN"
            title="Pets Water and Food Bowl Set, 15°Tilted Water and Food Bowl Set with Automatic "
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51ZE8666q3L._AC_SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12367889"
            Product="Peloton"
            title="Original Peloton Bike | Indoor Stationary Exercise Bike with Immersive 22 HD Touchscreen"
            price={590.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71quhV5xQ7L._AC_SX679_.jpg"
          />
          <Product
            id="14589023"
            Product="Echo Dot "
            title="All-New Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Cloud Blue"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61hvnjBzxlL._AC_SL1000_.jpg"
          />
          <Product
            id="12383947"
            Product="Amazon Fire TV"
            title="Amazon Fire TV 43 Omni Series 4K UHD smart TV, hands-free with Alexa"
            price={399.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/616og3I0RLL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12484499"
            Product="SAMSUNG Galaxy Z Flip "
            title="SAMSUNG Galaxy Z Flip 3 5G Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Super Steady Camera, Ultra Compact, US Version, Phantom Black"
            price={899.99}
            rating={5}
            image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/8c302d45-38c4-4a25-98e6-bf6de166d6c8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
