



const  Productcard = (props) => {


    return (

      

            <div className="col">
      <article className="h-100 bg-white border border-[#E7E6F6] rounded-2xl overflow-hidden d-flex flex-column">

        <div className="position-relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-100 object-cover h-44 md:h-56"
            loading="lazy"
          />

          <span className="position-absolute top-0 start-0 m-2 bg-[#17178F] text-white text-xs font-semibold rounded-pill px-2 py-1">
            NEW
          </span>

          <button
            type="button"
            className="position-absolute top-0 end-0 m-2 btn p-0 rounded-circle bg-white border border-[#E7E6F6] w-8 h-8 d-inline-flex align-items-center justify-content-center text-[#777777]"
            data-wish="s01"
            aria-label="Add Classic Essential Black T-Shirt to wishlist"
            aria-pressed="false"
          >
            <i className="bi bi-heart" aria-hidden="true"></i>
          </button>
        </div>

        <div className="p-3 d-flex flex-column flex-grow-1">

          <p className="text-xs uppercase tracking-widest text-[#777777] mb-1">
            Alice Solly
          </p>

          <h3
            className="fs-6 fw-semibold text-[#111111] mb-1 text-truncate"
            title="Classic Essential Black T-Shirt"
          >
            Classic Essential Black T-Shirt
          </h3>

          <p className="text-xs text-[#777777] mb-2">
            <i className="bi bi-star-fill text-[#17178F]" aria-hidden="true"></i>
            <i className="bi bi-star-fill text-[#17178F]" aria-hidden="true"></i>
            <i className="bi bi-star-fill text-[#17178F]" aria-hidden="true"></i>
            <i className="bi bi-star-fill text-[#17178F]" aria-hidden="true"></i>
            <i className="bi bi-star-fill text-[#17178F]" aria-hidden="true"></i>

            <span className="fw-semibold text-[#17178F]"> 4.8</span> (124)
          </p>

          <p className="mb-2 d-flex align-items-center flex-wrap gap-2">
            <span className="font-bold text-[#17178F] text-base">
              ₹544
            </span>

            <span className="text-sm text-[#777777] line-through">
              ₹1,400
            </span>

            <span className="bg-[#F1EFFA] border border-[#E7E6F6] text-[#17178F] text-xs font-semibold rounded-pill px-2 py-1">
              61% OFF
            </span>
          </p>
           <div className="mt-auto pt-1 d-flex gap-1">
           
       
           <button type="button" onClick={() => props.handleProductaddtocart(props.id)}

 className="btn !bg-primary !text-white !px-3 !py-2 !d-flex !align-items-center !gap-2 !rounded-pill">
            <i className="bi bi-cart3"></i> Add to Cart
          </button>     

          
          </div>


    

        </div>
      </article>
    </div>

    
    )
}




export  default Productcard;     