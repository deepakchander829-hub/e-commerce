import Annousmentbar from "../../Components/Annousmentbar"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import Servicefeacture from "../Categary/Categarypagesections/Servicefeactures"
import Trendingnow from "../Home/Homepagesections/Trendingnow"
import Productdetails from "./Productdetails"


const Productdetailpage = () => {
    return (
        <>

        <Annousmentbar />
         <Navbar />
         <Productdetails />
         <Trendingnow />
         <Servicefeacture />
         <Footer />
        </>
    )


}

export default Productdetailpage