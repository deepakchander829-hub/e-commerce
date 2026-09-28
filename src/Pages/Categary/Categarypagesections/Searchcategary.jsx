
  import Categaryrectanglecard from "../../../Components/Categaryrectanglecard";

const categories = [
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kids Wear",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
  },
];


const Searchcategary = () => {
    return (
        <>

      <section
  className="container pt-4 pt-lg-5"
  aria-label="More categories to explore"
>
  <div className="mb-3">
    <h2 className="font-bold text-2xl md:text-3xl text-[#17178F] mb-1">
      More to Explore
    </h2>

    <p className="text-[#777777] text-sm mb-0">
      Browse the full range of VibeCraft categories.
    </p>
  </div>

  {/* Category Search */}
  <div className="bg-white border border-[#E7E6F6] rounded-2xl p-3 mb-3">
    <label
      htmlFor="catSearch"
      className="text-xs font-semibold text-[#777777] uppercase tracking-widest mb-1 d-block"
    >
      Looking for something specific?
    </label>

    <div className="d-flex align-items-center bg-[#F8F8FC] border border-[#E7E6F6] rounded-full ps-3 pe-1 py-1 max-w-md">
      <i
        className="bi bi-search text-[#777777] me-2"
        aria-hidden="true"
      ></i>

      <input
        type="search"
        id="catSearch"
        className="form-control border-0 bg-transparent"
        placeholder="Search categories"
        aria-label="Search categories"
        autoComplete="off"
      />
    </div>
  </div>

  <p
    id="catSearchInfo"
    className="text-[#777777] text-sm mb-2"
    aria-live="polite"
  ></p>

  {/* Category Grid */}
  <div id="moreGrid" className="row g-3 g-md-4">

   

   {categories.map((item)=>{

    return(

        <div key={item.name} className="col-6 col-md-4 col-lg-3">

            <Categaryrectanglecard name={item.name} image={item.image} />


                

              
        </div>
    )
    
   }) }

    

    {/* Jewellery */}
    <div className="col-6 col-md-4 col-lg-3">
      <button
        type="button"
        className="w-100 h-100 text-start bg-white border rounded-2xl overflow-hidden p-0 border-[#E7E6F6]"
        data-tile="jewellery"
        aria-pressed="false"
        aria-label="Select Jewellery category"
      >
        <span className="d-block w-100 h-32 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
            alt="VibeCraft jewellery category"
            className="w-100 h-100 object-cover"
            loading="lazy"
          />
        </span>

        <span className="d-flex align-items-center justify-content-between p-2 p-md-3">
          <span className="text-sm font-semibold text-[#111111]">
            Jewellery
          </span>

          <span className="d-inline-flex align-items-center gap-1">
            <i
              className="bi bi-arrow-right text-[#17178F]"
              aria-hidden="true"
            ></i>
          </span>
        </span>
      </button>
    </div>

    
  </div>

  {/* Empty State */}
  <div id="moreEmpty" className="d-none text-center py-5">
    <i
      className="bi bi-search text-[#C0BFF9] text-[3rem]"
      aria-hidden="true"
    ></i>

    <h3 className="font-bold text-xl text-[#17178F] mt-2 mb-1">
      No categories found.
    </h3>

    <p className="text-[#777777] text-sm mb-3">
      Try a different search term.
    </p>

    <button
      type="button"
      id="btnClearMoreSearch"
      className="btn bg-[#17178F] text-white rounded-xl font-semibold px-4"
    >
      Clear Search
    </button>
  </div>
</section>

            
        </>
    )
}

export default Searchcategary;  