import React from "react";
// import './styles.css';
import bbq from '../assets/bbq.jpg'
import biryani from '../assets/biryani.jpg'
import chanaChart from '../assets/chanaChart.jpg'
import fruitChart from '../assets/fruitChart.jpg'
import kabab from '../assets/kabab.jpg'
import muttonkarahi from '../assets/muttonkarahi.jpg'

function FoodMenu() {
    const foodItems = [
      {
        title: 'BBQ',
        description: 'Made with Mutton, Tikkah masala and souce.',
        price: '$2.3',
        image: {bbq}
      },
      {
        title: 'Biryani',
        description: 'Made with Rice, Chicken, Biryani masala.',
        price: '$2.3',
        image: {biryani}
      },
      {
        title: 'Chana Chart',
        description: 'Boild Chana, Samosa, raita.',
        price: '$2.3',
        image: {chanaChart}
      },
      {
        title: 'Fruit Chart',
        description: 'Including Banana, Mango,Apple, Vanilla.',
        price: '$2.3',
        image: {fruitChart}
      },
      
      {
        title: 'Kabab',
        description: 'Made with Beaf,Onion,Tomato.',
        price: '$2.3',
        image: {kabab}
      },
      {
        title: 'Mutton Karahi',
        description: 'Made with Mutton,ghee,Tomato.',
        price: '$2.3',
        image: {muttonkarahi}
      }
      
    ];
  
    return (
      <div className="food-menu">
        <h2>Food Menu</h2>
        <div className="menu-items">
          {foodItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FoodMenu;