import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Sections/Categories/Categories';
import FoodItem from './components/Sections/FoodItem/FoodItem';
import Trending from './components/Sections/Trending/Trending';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Trending />
    </>
  );
}

export default App;
