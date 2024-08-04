import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FoodCategory from './components/FoodCategory';
import FoodMenu from './components/FoodMenu';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FoodCategory />
      <FoodMenu />
      <Footer />
    </div>
  );
}

export default App;
