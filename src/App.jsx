import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FoodCategory from './components/FoodCategory';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
// import './styles.css';
import HeroComponent from './components/HeroComponent';
import ExploreFood from './components/ExploreFood';
import ExploreFoodList from './components/ExploreFoodList';
import FoodMenuList from './components/FoodMenuList';

function App() {
  return (
   <>
      <Header />
      <HeroComponent />
      <ExploreFood />
      <ExploreFoodList />
      <SearchBar />
      {/* <FoodCategory /> */}
      <FoodMenuList />
      <Footer />
    </>
  );
}

export default App;
