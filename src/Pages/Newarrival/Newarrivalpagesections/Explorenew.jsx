






import Categaryrectanglecard from "../../../Components/Categaryrectanglecard";


const cardData = [
  {
    name: "Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Clothing",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Kids Wear",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    name: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&h=300&q=80",
  },
];


const  Explorenew =() => {
    return (



<section className="container pt-5" aria-label="Trending products">

  <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-3">
    <div>
      <h2 className="font-extrabold text-2xl md:text-3xl text-[#17178F] mb-1">
      Explore new
      </h2>

      <p className="text-[#777777] text-sm mb-0">
        Fresh categary just land
      </p>
    </div>

    <a
      href="shop.html"
      className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold text-sm px-3"
    >
      View All →
    </a>
  </div>

  <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
    <p
      id="searchInfo"
      className="text-[#777777] text-sm mb-0"
      aria-live="polite"
    ></p>

    <button
      type="button"
      id="btnClearSearch"
      className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold text-xs px-2 py-1 d-none"
      aria-label="Clear search results"
    >
      Clear Search
    </button>
  </div>

  <div
    id="trendingGrid"
    className="row g-3 g-md-4 row-cols-2 row-cols-md-3 row-cols-lg-5"
  >






{cardData.map(card => (
    <Categaryrectanglecard key={card.id}  name={card.name}  image={card.image} />
))  }

    

    

  </div>

  <div id="trendingEmpty" className="d-none text-center py-4">
    <i
      className="bi bi-search text-[#C0BFF9] text-[2.5rem]"
      aria-hidden="true"
    ></i>

    <p className="font-semibold text-[#17178F] mt-2 mb-1">
      No trending products found.
    </p>

    <p className="text-[#777777] text-sm mb-0">
      Try a different search term.
    </p>
  </div>

</section>


        
)       
}
export default Explorenew; 