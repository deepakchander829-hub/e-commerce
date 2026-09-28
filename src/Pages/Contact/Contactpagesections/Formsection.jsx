import Getintouchbtn from "../../../Components/Getintouchbtn";


import Contactinput from "../../../Components/Contactinput";   



const Formsection = () => {
    return (
        <>
                <section className="py-5 contact-section">
    <div className="container">
        <div className="row g-4 g-lg-5">

            {/* Contact Information */}
            <div className="col-12 col-lg-5">
                <div className="contact-info  ps-3">

                    <h2 className="fw-bold mb-3 contact-title">
                        Get in Touch
                    </h2>

                    <p className="text-muted mb-4">
                        Reach out by email, phone or visit our store — we are happy to help.
                    </p>


                      {/* Customer Support */}  
                    <Getintouchbtn icon = "bi-headset" title = "Customer Support" para = "support@vibecart.com"   />
                    
                      {/* Phone */}
                     <Getintouchbtn icon = "bi-telephone" title = "Phone" para = "+91 1800 123 457"   />
                      
                      
                       {    /* Email */}
                       <Getintouchbtn icon = "bi-envelope-open" title = "Email" para = "hellovibecart@gmail.com"   />
                       
                       
                       <Getintouchbtn icon = "bi-geo-alt" title = "Address" para = "New Delhi, India"   />
                        
                         {/* Business Hours */}
                        <Getintouchbtn icon = "bi-clock" title = "Business Hours" para = "Mon–Sat, 10:00 AM–7:00 PM"   />


                   
               
                  

                </div>
            </div>

            {/* Contact Form */}
            <div className="col-12 col-lg-7">
                <div className="contact-form ps-3">

                    <div className="d-flex align-items-center gap-3 mb-4">
                        <div className="form-icon flex-shrink-0">
                            <i className="bi bi-send"></i>
                        </div>

                        <div>
                            <h2 className="fw-bold mb-1 form-title">
                                Send Us a Message
                            </h2>

                            <p className="text-muted small mb-0">
                                We usually reply within 24 hours.
                            </p>
                        </div>
                    </div>

                    <form id="contactForm">

                      <Contactinput name = "FullName" />  
                       <Contactinput name = "Email Address" />  
                      <Contactinput name = "Phone Number" />  
                      <Contactinput name = "Subject" />  
                         

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label fw-semibold">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="form-control"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn contact-submit w-100 text-light !bg-purple-950"
                        >
                            Send Message
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>

                    </form>
                </div>
            </div>

        </div>
    </div>
</section>


        </>
    );
};

export default Formsection;     