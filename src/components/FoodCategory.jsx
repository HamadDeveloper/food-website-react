import React from "react";
// import './styles.css';
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import momo from '../assets/momo.jpg'

function FoodCategory(){
    return (
        <div className="food-category">
            <h2>Explore Foods</h2>
            <div className="categories">
                <div className="category">
                <img src={pizza} alt="Pizza" />
                <h3>Pizza</h3>
                </div>
                <div className="category">
          <img src={burger} alt="Burger" />
          <h3>Burger</h3>
        </div>
        <div className="category">
          <img src={momo} alt="Momo" />
          <h3>Momo</h3>
     </div>
    </div>
   </div>
    );
}

export default FoodCategory;