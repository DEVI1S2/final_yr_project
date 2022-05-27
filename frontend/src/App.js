

import React from 'react'
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";

//import background from "./reg.jpg";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Regisshop from "./components/Regisshop";
import Logshop from "./components/Logshop";
import Loguser from "./components/Loguser";
import Regisuser from "./components/Regisuser";
import Products from "./pages/Products";
import About from "./pages/About"
import Contact from "./pages/Contact";
// import Cart from "./components/Cart";
// import Chatbot from "./components/Chatbot";
import Product from "./components/DisplayProduct";
import Single_Shop_Prods from './components/Single_Shop_Prods'
import AddProduct from './components/AddProduct';
import Logout from './components/Logout';
import EditProduct from './components/EditProduct';
import ProductDetail from './components/ProductDetail';
import Prod_By_Catg from './components/Prod_By_Catg';
import Newloginshop from './components/Newloginshop';
import Forgotpasswordshop from './components/Forgotpasswordshop';
import Newlogin from './components/Newlogin';
import Forgotpassword from './components/Forgotpassword';
import Prod_By_Brand from './components/Prod_By_Brand';
function App() {
  return (
      <div>
      <Router>
      <Navbar />
     <Logout />
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Regisshop />} />
        <Route exact path="/logshop" element={<Logshop />} />
        <Route exact path="/loguser" element={<Loguser />} />
        <Route exact path="/Regisuser" element={<Regisuser />} />
        <Route exact path="/single_shop_prods" element={<Single_Shop_Prods />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/editproduct" element={<EditProduct />} />
        <Route exact path="/productdetail" element={<ProductDetail />} />
        <Route exact path="/prodbycatg" element={<Prod_By_Catg />} />
        <Route path="/product" exact element={<Product/>} />
        <Route path="/newlogin" exact element={<Newlogin/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/newloginshop" exact element={<Newloginshop/>} />
        <Route path="/forgotpassword" exact element={<Forgotpassword/>} />
        <Route path="/forgotpasswordshop" exact element={<Forgotpasswordshop/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route exact path="/prodbybrand" element={<Prod_By_Brand />} />
        {/* <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} /> */}
       
         {/* </Router>Route exact path="/products" element={<Shopproducts />} /> */}
      </Routes>
      {/* <Chatbot /> */}
      <Footer />
    </Router>
    </div>
    
  );
}

export default App
     //</div>
    // <div className="App" style={{ backgroundImage: `url(${background})`,
    // backgroundSize: 'cover',
    
    // backgroundRepeat: 'no-repeat', }}>
    //  </div> 
    
//   );
// }


