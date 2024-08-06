import React from "react";
// import './styles.css';
import bbq from '../assets/bbq.jpg'
import biryani from '../assets/biryani.jpg'
import chanaChart from '../assets/chanaChart.jpg'
import fruitChart from '../assets/fruitChart.jpg'
import kabab from '../assets/kabab.jpg'
import muttonkarahi from '../assets/muttonkarahi.jpg'
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