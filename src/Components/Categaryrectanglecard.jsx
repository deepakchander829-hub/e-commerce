

const  Ccard = (props) => {
    return (
       

         <article className="h-100 bg-white border border-[#E7E6F6] rounded-2xl overflow-hidden d-flex flex-column">
        <div className="position-relative">
          <img
            src={props.image}
            alt="VibeCraft accessories category collection"
            className="w-100 object-cover h-40 md:h-48"
            loading="lazy"
          />

          <button
            type="button"
            className="position-absolute top-0 end-0 m-2 btn p-0 rounded-circle bg-white border border-[#E7E6F6] w-8 h-8 d-inline-flex align-items-center justify-content-center text-[#777777]"
            aria-label="Add Accessories category to wishlist"
            aria-pressed="false"
          >
            <i className="bi bi-heart" aria-hidden="true"></i>
          </button>
        </div>

        <div className="p-3 d-flex flex-column flex-grow-1">
          <h3 className="fs-6 fw-semibold text-[#111111] mb-1">
           {props.name}
          </h3>

      
          <a
            href="#"
            className="mt-auto d-inline-flex align-items-center gap-1 text-[#17178F] font-semibold text-sm text-decoration-none"
          >
            Shop Accessories
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </article>

    )
}


export default Ccard    