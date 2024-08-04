import React from "react";
import './styles.css';

function FoodCategory(){
    return (
        <div className="food-category">
            <h2>Explore Foods</h2>
            <div className="categories">
                <div className="category">
                <img src={`${process.env.PUBLIC_URL}/images/pizza.jpg`} alt="Pizza" />
                <h3>Pizza</h3>
                </div>
                <div className="category">
          <img src={`${process.env.PUBLIC_URL}/images/burger.jpg`} alt="Burger" />
          <h3>Burger</h3>
        </div>
        <div className="category">
          <img src={`${process.env.PUBLIC_URL}/images/momo.jpg`} alt="Momo" />
          <h3>Momo</h3>
     </div>
    </div>
   </div>
    );
}

export default FoodCategory;