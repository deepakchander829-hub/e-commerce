





const productimgbox = () => {
    return (
        <div className="position-relative overflow-hidden rounded-4">

                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&h=1100&q=90"
                    alt="Classic Essential Black T-Shirt"
                    className="w-100 object-fit-cover"
                    style={{ height: "560px" }}
                  />

                  <span className="position-absolute top-0 start-0 m-3 bg-[#17178F] text-white rounded-pill px-3 py-2 small fw-semibold">
                    61% OFF
                  </span>

                  <button className="position-absolute top-0 end-0 m-3 btn bg-white rounded-circle shadow-sm text-[#17178F] w-11 h-11">
                    <i className="bi bi-heart"></i>
                  </button>

                </div>
    )
}  

export default productimgbox    