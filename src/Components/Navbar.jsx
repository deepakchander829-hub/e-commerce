import { useState } from "react";
import Naviconbtn from "./Naviconbtn";
import Navmobileul from "./Navmobileul";  
import Navdesktopul from "./Navdesktopul";

const  Navbar  =()  =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
   <nav className="flex flex-wrap items-center gap-2 px-3 py-3 lg:flex-nowrap  bg-white">

<button
  type="button"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="shrink-0 lg:hidden"
>
  <i className="text-purple-950 p-1 bi bi-list text-xl"></i>
</button>


  {/* Logo */}
  <a href="#" className=" nav-link  shrink-0 font-bold text-black">
    VibeCart
  </a>
    
  {/* Desktop Menu */}


   <Navdesktopul />


  {isMenuOpen && (
<Navmobileul/>
)}


  {/* Search */}
<div className="order-last w-full md:order-none md:flex-1 lg:ml-auto">

  <div className="relative w-full">

    <i className="
      bi bi-search
      absolute left-3 top-1/2
      -translate-y-1/2
      text-gray-400
    "></i>

    <input
      type="search"
      placeholder="Search products..."
      className="
     border-1 border-purple-900
        w-full

         lg:w-[290px]
        rounded-md
         
        py-2 pl-10 pr-3
       
        !text-purple-950
       
      "
    />

  </div>
</div>


  {/* Icons */}
<div className="
  ml-auto
  flex
  shrink-0
 
  lg:ms-15
">

  <Naviconbtn  to="/profile"  icon="bi bi-person" label="Profile" />
  <Naviconbtn  to="/wishlist" icon="bi bi-heart "     label="Wishlist"    />
  <Naviconbtn  to="/addtocart"   icon="bi bi-cart3"   label="Cart" />

  

    
</div>


</nav>

  );
}

export default Navbar;