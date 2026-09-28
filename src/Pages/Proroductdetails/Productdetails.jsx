

import Productdetailsbox from "../../Components/Productdetailsbox"
import Productimgbox from "../../Components/Productimgbox"



const Productdetails = () => {
    return (
        <>

         <section className="container py-4 py-lg-5">

          <div className="row g-4 g-lg-5">

            {/* IMAGE */}
            <div className="col-12 col-lg-6">

              <div className="bg-white border border-[#E7E6F6] rounded-4 p-2 shadow-sm">

                <Productimgbox />
              </div>

              {/* THUMBNAILS */}
              <div className="row g-2 mt-2">

                {[1, 2, 3, 4].map((item) => (
                  <div
                    className="col-3"
                    key={item}
                  >
                    <button className="btn p-1 bg-white border border-[#E7E6F6] rounded-3 w-100">
                      <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=250&q=80"
                        alt={`Product view ${item}`}
                        className="w-100 object-fit-cover rounded-2"
                        style={{ height: "110px" }}
                      />
                    </button>
                  </div>
                ))}

              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="col-12 col-lg-6">

              <Productdetailsbox />
            </div>
          </div>
        </section>

        </>
    )


}

export default Productdetails   