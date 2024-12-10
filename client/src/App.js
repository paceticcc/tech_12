import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home';

import Basket from './pages/basket';
import { BasketProvider } from './components/context/basketcontext';

import Product from './pages/product';
import './style/common.css';
import './style/reset.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from './utils/scrollToTop';

function App() {


  
  return (
    <div className="App">
      <BasketProvider>
        <Router>
          <ScrollToTop /> {/*Для того, чтобы перемещать пользователя в начало страницы при переходе */}
          <Header />
          <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/basket' element={<Basket /> }/>
            <Route path='/product/:id' element={<Product /> }/>
          </Routes>

          {/* <Home /> */}
          {/* <Basket />  */}
          {/* <Product />  */}
          <Footer />
          {/*<h1>Hello</h1> */}  

        </Router>
      </BasketProvider>
    </div>
  );
}

export default App;
