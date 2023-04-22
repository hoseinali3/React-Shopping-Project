import logo from './logo.svg';
import './App.scss';
import { useRoutes } from 'react-router-dom';

import Route from './Routes';
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import MobileMiniShoppingBasket from './Components/Header/MobileMiniShoppingBasket/MobileMiniShoppingBasket';
import ShowFavoriteBtn from './Components/ShowFavoriteModal/ShowFavoriteBtn';
function App() {

const router = useRoutes(Route)



  return (
    <div>
     <Header/>
     <Navbar/>
    <MobileMiniShoppingBasket/>
    <ShowFavoriteBtn/>
     <ScrollToTop/>
    {router}
     
    <Footer/>
    </div>
  );
}

export default App;
