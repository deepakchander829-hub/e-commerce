

import Faqbtn from "../../../Components/Faqbtn";


const Whyusevibecart = () =>{
    return(

        <>

        <section
  className="container pt-5"
  aria-label="Why shop with VibeCraft"
>
  <div className="text-center mb-4">
    <h2 className="font-extrabold text-2xl md:text-3xl text-[#17178F] mb-1">
      Why Shop With VibeCraft?
    </h2>

    <p className="text-[#777777] text-sm mb-0">
      Quality, trust and style at the heart of everything we do.
    </p>
  </div>

  <div className="row g-3 g-lg-4 text-center">

    <div className="col-6 col-lg-3">
      <Faqbtn icon="bi bi-emoji-smile" title="10K+" description="Happy Customers" />    
      
    </div>

    <div className="col-6 col-lg-3">
    <Faqbtn icon="bi bi-star-fill" title="4.8/5" description="Customer Rating" />   
    </div>

    <div className="col-6 col-lg-3">
    <Faqbtn icon="bi bi-shield-check" title="100%" description="Secure Checkout" />  
    </div>

    <div className="col-6 col-lg-3">
    <Faqbtn icon="bi bi-box-seam" title="30K+" description="Products" />  
    </div>

  </div>
</section>



   </>     
       
    )
}


export default Whyusevibecart;  