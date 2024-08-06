import React from 'react'
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import chanaChart from "../assets/chanaChart.jpg"
import fruitChart from "../assets/fruitChart.jpg"
import kabab from "../assets/kabab.jpg"
import muttonkarahi from "../assets/muttonkarahi.jpg"
import momo from "../assets/momo.jpg"
import FoodMenu from './FoodMenu'

function FoodMenuList() {
    const foodNames =[
        {name:"Pizza", image:pizza ,price:"20", ingredients:"Made with souce,chicken and vegetables" },
        {name:"Burger", image:burger ,price:"21", ingredients:"Made with souce,chicken and vegetables" },
        {name:"ChanaChart", image:chanaChart ,price:"22", ingredients:"Made with souce,chicken and vegetables" },
        {name:"FruitChart", image:fruitChart ,price:"23", ingredients:"Made with souce,chicken and vegetables" },
        {name:"Kabab", image:kabab ,price:"24", ingredients:"Made with souce,chicken and vegetables" },
        {name:"Mutton Karahi", image:muttonkarahi ,price:"30", ingredients:"Made with souce,chicken and vegetables" },
    ] 
  return (
    <FoodMenu foodNames={foodNames}/>
  )
}

export default FoodMenuList
