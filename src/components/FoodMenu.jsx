import React from "react";
import './styles.css';

function FoodMenu() {
    const foodItems = [
      {
        title: 'BBQ',
        description: 'Made with Mutton, Tikkah masala and souce.',
        price: '$2.3',
        image: `${process.env.PUBLIC_URL}/images/bbq.jpg`
      },
      {
        title: 'Biryani',
        description: 'Made with Rice, Chicken, Biryani masala.',
        price: '$2.3',
        image: `${process.env.PUBLIC_URL}/images/biryani.jpg`
      },
      {
        title: 'Chana Chart',
        description: 'Boild Chana, Samosa, raita.',
        price: '$2.3',
        image: `${process.env.PUBLIC_URL}/images/chanaChart.jpg`
      },
      {
        title: 'Fruit Chart',
        description: 'Including Banana, Mango,Apple, Vanilla.',
        price: '$2.3',
        image: `${process.env.PUBLIC_URL}/images/fruitChart.jpg`
      },
      
      {
        title: 'Kabab',
        description: 'Made with Beaf,Onion,Tomato.',
        price: '$2.3',
        image: `${process.env.PUBLIC_URL}/images/kabab.jpg`
      },
      {
        title: 'Mutton Karahi',
        description: 'Made with Mutton,ghee,Tomato.',
        price: '$2.3',
        image: `${process.env.PUBLIC_URL}/images/muttonkarahi.jpg`
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