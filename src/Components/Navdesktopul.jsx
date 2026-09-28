import { Link } from "react-router-dom";



const Navdesktopul=()=>{
    return(
        <ul className="hidden lg:flex w-50 justify-end items-center gap-4 list-none m-0 p-0">


  <li>
      
      <Link to="/" className="nav-link text-black">
        Home
      </Link>
  </li>

  <li>  
    <Link to="/Shop" className="nav-link text-black">
      Shop
    </Link>
  </li> 

  <li>  
    <Link to="/categary" className="nav-link text-black">
      Category
    </Link>
  </li>

    <li>
        <Link to="/newarival" className="nav-link text-black">
        New Arrival
      </Link>
  </li>

  <li>  
        <Link to="/sale" className="nav-link text-black">
        Sale
      </Link>
  </li>



    <li>  
      <Link to="/contact" className="nav-link text-black">
        Contact
      </Link>
  </li>

</ul>
    )
}

export default Navdesktopul;    