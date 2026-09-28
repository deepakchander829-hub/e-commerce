
import Annousmentbar from "../../Components/Annousmentbar"
import Navbar from "../../Components/Navbar"
import Servicefeacture from "../Categary/Categarypagesections/Servicefeactures";
import Promobanner from "../Home/Homepagesections/Promobanner"
import Bestdealtoday from "./Salepagesections/Bestdealtoday";
import Footer from "../../Components/Footer";    

const Salepage = () => {
    return (
      <>

      <Annousmentbar />
      <Navbar />
      <Promobanner />
      <Bestdealtoday />

      <Servicefeacture />
      <Footer />
      
      </>
    );
}; 

export default Salepage;    