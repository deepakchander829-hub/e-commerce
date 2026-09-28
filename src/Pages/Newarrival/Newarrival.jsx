
           
import  Annousmentbar from "../../Components/Annousmentbar";
 import Navbar from "../../Components/Navbar";
import Promobanner from "../Home/Homepagesections/Promobanner";
import Explorenew from "./Newarrivalpagesections/Explorenew"; 
 import Latestdrop from "./Newarrivalpagesections/Latestdrop";  
  
 import Trendingnow from "../Home/Homepagesections/Trendingnow"; 
 
 import Servicefeacture from "../Home/Homepagesections/Servicefeacture"; 
 import Footer from "../../Components/Footer"; 

const Newarrival = () => {
            return (
                       <>

                    <Annousmentbar />   
 
                    <Navbar />

        <Promobanner />
        <Explorenew />
        <Latestdrop />
        <Trendingnow  />
        <Servicefeacture />
        <Footer />
      
                    


 
                </>
                )
            }

            export default Newarrival;  