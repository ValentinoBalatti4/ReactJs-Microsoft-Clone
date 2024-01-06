import './App.css';
import Navbar from './components/navbar/Navbar';
import Announcement from './components/announcement/Announcement';
import Slider from './components/slider/Slider';
import Products from './components/products/Products';
import NewsSection from './components/newsSection/NewsSection';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Products/>
      <NewsSection/>
      <Footer/> 
    </div>
  );
}

export default App;
