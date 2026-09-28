import Helpbtn from "../../../Components/Helpbtn";





const Helpcategary = () => {
    return (
        <>
        <section className="pb-20" aria-label="Help categories">
    <div className="container text-center">
        <h2 className="font-bold text-[#17178F] text-3xl md:text-4xl mb-2">
            How can we help?
        </h2>

        <p className="text-[#777777] mb-4 mb-md-5">
            Here are the topics our customers ask about most.
        </p>

        <div className="row g-4 text-start">

            {/* Order support */}
            <div className="col-12 col-md-6 col-lg-4">
                <Helpbtn icon="bi bi-cart3 text-lg"  heading="Order Support" para="Need help with your order? Our support team can help." />
                
            </div>  

            {/* Returns and refunds */}
            <div className="col-12 col-md-6 col-lg-4">
                <Helpbtn icon="bi bi-arrow-return-left text-lg"  heading="Returns &amp; Refunds" para="Need help with a return or refund? We&apos;re here to assist." />
            </div>

            {/* Product questions */}
            <div className="col-12 col-md-6 col-lg-4">
              <Helpbtn icon="bi bi-chat-dots text-lg" heading="Product Questions" para="Have questions about a product? Contact our support team." />   
            </div>

        </div>
    </div>
</section>

        </>
    );  
};   

export default Helpcategary;    