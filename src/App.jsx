import React from 'react';
import Header from './components/Header';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
import HeroComponent from './components/HeroComponent';
import ExploreFood from './components/ExploreFood';
import ExploreFoodList from './components/ExploreFoodList';
import FoodMenuList from './components/FoodMenuList';

function App() {
  return (
   <>
      <Header />
      <HeroComponent /> 
      <ExploreFoodList />
      <FoodMenuList />
      <Footer />
    </>
  );
}

export default App;
