




import { Link } from "react-router-dom";


const Navmobileul=()=>{
    return (
  <ul className="order-last w-full flex flex-col gap-3 border-t border-gray-200 pt-3 lg:hidden">
    <li>
      
      
      <Link to="/" className="nav-link text-black">Home</Link></li>
    <li><Link to="/Shop"  className="nav-link text-black">Shop</Link></li>
    <li><Link to="/categary"  className="nav-link text-black">Category</Link></li>
    <li><Link to="/sale"  className="nav-link text-black">Sale</Link></li>
    <li><Link to="/newarival"  className="nav-link text-black">New Arrival</Link></li>
    <li><Link to="/contact"  className="nav-link text-black">Contact</Link></li>
  </ul>
  );  
}


export default Navmobileul;