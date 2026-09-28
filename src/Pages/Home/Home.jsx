
 import Annousmentbar from "../../Components/Annousmentbar";
 import Navbar from "../../Components/Navbar";
 import Promobanner from "./Homepagesections/Promobanner";
 import Servicefeacture from "./Homepagesections/Servicefeacture";
import Categary from "./Homepagesections/Categary";
import Trendingnow from "./Homepagesections/Trendingnow";
import Editorialcollection from "./Homepagesections/Editorialcollection";
import Whyusevibecart from "./Homepagesections/Whyusevibecart";
 import Trustedbrand from "./Homepagesections/Trustedbrand";   
import Footer from "../../Components/Footer";
import Longbanner from "./Homepagesections/Longbanner";


const Home = () => {
    return (
        <>  
            <Annousmentbar />   
            <Navbar />
            <Promobanner />

            <Servicefeacture />
           
                <Categary />  

                <Trendingnow /> 
                <Editorialcollection />
                 <Trendingnow />
                 <Longbanner />
                 <Whyusevibecart />


                  <Trustedbrand />  

                    <Footer />
                       
        </>

        
    )
}


export default Home;