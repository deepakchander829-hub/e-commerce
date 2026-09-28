import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Categary from "./Pages/Categary/Categary";
import Newarrival from "./Pages/Newarrival/Newarrival";
import Sale from "./Pages/Sale/Sale";
import Contact from "./Pages/Contact/Contact";
import Addtocart from "./Pages/Addtocartpage/Addtocart";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categary" element={<Categary />} />
        <Route path="/newarival" element={<Newarrival />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addtocart" element={<Addtocart />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
