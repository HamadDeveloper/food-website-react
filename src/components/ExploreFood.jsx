import React from "react";
// import './styles.css';
import pizza from '../assets/pizza.jpg'
import burger from '../assets/burger.jpg'
import momo from '../assets/momo.jpg'

function ExploreFood({foods}){
    return (
        <div className="explore-foods">
            <h1>Explore Foods</h1>
           <div className="card-container">
               {foods.map((food, index) =>(
                <div key={index}>
                    <img src={food.image} alt={food.name} />
                    <p>{food.name}</p>
                </div>
               ))}
           </div>
               
     
    </div>
   
    );
}

export default ExploreFood;