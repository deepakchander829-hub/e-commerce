import Faqbtn from "../Components/Faqbtn"
import Addtocartbtn from "./Addtocartbtn"








const Productdetailsbox = () => {
    return (
         <div className="pe-lg-3">

                <p className="text-uppercase small text-[#777777] fw-semibold tracking-wider mb-2">
                  Alice Solly
                </p>

                <h1 className="display-6 fw-bold text-[#111111] mb-3">
                  Classic Essential Black T-Shirt
                </h1>

                {/* RATING */}
                <div className="d-flex flex-wrap align-items-center gap-2 mb-4">

                  <span className="text-[#17178F]">
                    ★★★★★
                  </span>

                  <span className="fw-bold text-[#17178F]">
                    4.8
                  </span>

                  <span className="text-[#777777] small">
                    (124 reviews)
                  </span>

                  <span className="text-[#CCCCCC]">
                    |
                  </span>

                  <span className="text-success fw-semibold small">
                    ● In Stock
                  </span>

                </div>

                {/* PRICE */}
                <div className="d-flex align-items-center flex-wrap gap-3 mb-1">

                  <span className="display-6 fw-bold text-[#17178F]">
                    ₹544
                  </span>

                  <span className="text-decoration-line-through text-[#777777] fs-5">
                    ₹1,400
                  </span>

                  <span className="bg-[#F1EFFA] text-[#17178F] border border-[#E7E6F6] rounded-pill px-3 py-1 small fw-bold">
                    61% OFF
                  </span>

                </div>

                <p className="text-[#777777] small">
                  MRP inclusive of all taxes
                </p>

                {/* DIVIDER */}
                <hr className="border-[#E7E6F6] my-4" />

                {/* DESCRIPTION */}
                <p className="text-[#666666] lh-lg">
                  Designed for everyday comfort, this classic black
                  T-shirt features a clean silhouette, soft combed cotton
                  fabric and an easy-to-style finish. A versatile wardrobe
                  essential that pairs with denim, chinos and tailored
                  trousers alike.
                </p>

                {/* COLOR */}
                <div className="mt-4">

                  <div className="d-flex gap-2 align-items-center mb-2">
                    <span className="fw-bold">
                      Color:
                    </span>
                    <span className="text-[#777777]">
                      Black
                    </span>
                  </div>

                  <div className="d-flex gap-2">

                    <button
                      className="rounded-circle border-3 border-[#17178F] bg-[#111111] w-10 h-10 shadow-sm"
                      aria-label="Black"
                    ></button>

                    <button
                      className="rounded-circle border-2 border-[#E7E6F6] bg-white w-10 h-10"
                      aria-label="White"
                    ></button>

                    <button
                      className="rounded-circle border-2 border-[#E7E6F6] bg-[#1B2A5B] w-10 h-10"
                      aria-label="Navy"
                    ></button>

                  </div>

                </div>

                {/* SIZE */}
                <div className="mt-4">

                  <div className="d-flex justify-content-between align-items-center mb-2">

                    <div>
                      <span className="fw-bold">
                        Size:
                      </span>

                      <span className="text-[#777777] ms-2">
                        M
                      </span>
                    </div>

                    <button
                      className="btn btn-sm bg-[#F1EFFA] text-[#17178F] border border-[#E7E6F6] rounded-3 fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#sizeGuideModal"
                    >
                      <i className="bi bi-rulers me-1"></i>
                      Size Guide
                    </button>

                  </div>

                  <div className="d-flex flex-wrap gap-2">

                    <button className="btn border border-[#E7E6F6] bg-white text-[#111111] rounded-3 px-4">
                      S
                    </button>

                    <button className="btn bg-[#17178F] text-white rounded-3 px-4">
                      M
                    </button>

                    <button className="btn border border-[#E7E6F6] bg-white text-[#111111] rounded-3 px-4">
                      L
                    </button>

                    <button className="btn border border-[#E7E6F6] bg-white text-[#111111] rounded-3 px-4">
                      XL
                    </button>

                    <button className="btn border border-[#E7E6F6] bg-white text-[#111111] rounded-3 px-4">
                      XXL
                    </button>

                  </div>

                </div>

                {/* QUANTITY */}
                <div className="mt-4">

                  <p className="fw-bold mb-2">
                    Quantity
                  </p>

                  <div className="d-inline-flex align-items-center border border-[#E7E6F6] rounded-3 bg-white overflow-hidden">

                    <button className="btn px-3 text-[#17178F] fw-bold">
                      −
                    </button>

                    <span className="px-3 fw-bold">
                      1
                    </span>

                    <button className="btn px-3 text-[#17178F] fw-bold">
                      +
                    </button>

                  </div>

                </div>

                {/* BUTTONS */}
                <div className="row g-2 mt-4">

                  <div className="col-12 col-md-6">

                  <Addtocartbtn />
                  </div>

                  <div className="col-12 col-md-5">

                    <button className="btn bg-[#C0BFF9] text-[#17178F] rounded-3 w-100 py-3 fw-bold">
                      Buy Now
                    </button>

                  </div>

                 
                </div>

                {/* DELIVERY */}
                <div className="bg-white border border-[#E7E6F6] rounded-4 p-4 mt-4 shadow-sm">

                  <h5 className="fw-bold text-[#17178F] mb-3">
                    Delivery & Returns
                  </h5>

                  <div className="row g-3">
                    

               
                    <div className="col-6">
                          <Faqbtn  icon ={"bi-truck"}  title="Free Shipping" description="Orders above ₹999"   />

                    </div>

                    <div className="col-6">
                             <Faqbtn  icon ={"bi-clock"}  title="Fast    Delivery" description="3–5 business days"   />

                    
                    </div>

                    <div className="col-6">
                             <Faqbtn  icon ={"bi-arrow-repeat"}  title="Easy Returns" description="7-day returns"   />

                    </div>

                    <div className="col-6">
                             <Faqbtn  icon ={"bi-shield-check"}  title="Secure Checkout" description="100%securepayment"   />
                    </div>

                  </div>

                </div>

              </div>
    )
}   

export default Productdetailsbox    