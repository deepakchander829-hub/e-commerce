


 import Annousmentbar from "../../Components/Annousmentbar";
 import Navbar from "../../Components/Navbar";
 import Promobanner from "../Home/Homepagesections/Promobanner";
import Maincategary from "./Categarypagesections/Maincategary";
import Explorecollection from "./Categarypagesections/Explorecollection";
import Searchcategary from "./Categarypagesections/Searchcategary";
import Trendincategary from "./Categarypagesections/Trendingcategary";
import Allcategary from "./Categarypagesections/Allcategary"; 
import Servicefeatures from "./Categarypagesections/Servicefeactures";
import Footer from "../../Components/Footer";    

const Categary = () => {    
    return (
        <>
        <Annousmentbar />   
        <Navbar />
        <Promobanner />
        <Maincategary /> 
        <Explorecollection />  
        <Searchcategary />
        <Trendincategary />
       <Allcategary /> 
       <Servicefeatures />
       <Footer />  
        </>
    )
}


export default Categary 