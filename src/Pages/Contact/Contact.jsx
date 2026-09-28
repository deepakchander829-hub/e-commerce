import Annousmentbar from "../../Components/Annousmentbar";
import Navbar from "../../Components/Navbar";
import Formsection from "./Contactpagesections/Formsection";
import Contactheading from "./Contactpagesections/Contactheading";
import Footer from "../../Components/Footer";
import Helpcategary from "./Contactpagesections/Helpcategary";
import Location from "./Contactpagesections/Location";
    

const Contact = () => {
    return (
        <>
       <Annousmentbar />
       <Navbar />
       <Contactheading />
        <Formsection />
        <  Helpcategary />
        <Location />
        <Footer />  
        </>
    );
};

export default Contact;