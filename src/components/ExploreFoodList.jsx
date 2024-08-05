import React from 'react'
import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import momo from "../assets/momo.jpg"
import ExploreFood from './ExploreFood'

function ExploreFoodList() {

    const foods =[
        {name:'pizza' , image:pizza},
        {name:'burger', image:burger},
        {name:'momo' ,image:momo}
    ]
  return (
    <ExploreFood foods={foods} />
  )
}

export default ExploreFoodList
