import React from "react";
import FoodCard from "./FoodCard";
import "./FoodCard.css"

function FoodMenu({foodNames}) {
   
  
    return (
      <div className="food-menu-container">
        <h1 className="food-menu-heading">Food Menu</h1>
        <div className="food-menu-list">
        {foodNames.map((food,index)=>(
          <FoodCard 
          key={index}
          title = {food.name}
          price = {food.price}
          ingredients = {food.ingredients}
          image = {food.image}
          />
        ))}
        </div>
       <p className="see-all-foods">See All Foods</p>
      </div>
    );
  }
  
  export default FoodMenu;