

import ProductCard from "../../../Components/Productcard";


const cardData = [
  {
    id: "s01",
    brand: "Alice Solly",
    title: "Classic Essential Black T-Shirt",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.8,
    reviews: 124,
    price: 544,
    oldPrice: 1400,
    discount: "61% OFF",
  },
  {
    id: "s02",
    brand: "Roadster",
    title: "Regular Fit Casual T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.6,
    reviews: 98,
    price: 499,
    oldPrice: 1299,
    discount: "62% OFF",
  },
  {
    id: "s03",
    brand: "H&M",
    title: "Premium Cotton Oversized T-Shirt",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.7,
    reviews: 156,
    price: 699,
    oldPrice: 1599,
    discount: "56% OFF",
  },
  {
    id: "s04",
    brand: "Levis",
    title: "Classic Blue Denim Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.9,
    reviews: 210,
    price: 1499,
    oldPrice: 2999,
    discount: "50% OFF",
  },
  {
    id: "s05",
    brand: "Roadster",
    title: "Slim Fit Casual Shirt",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=500&q=80",
    badge: "SALE",
    rating: 4.5,
    reviews: 87,
    price: 799,
    oldPrice: 1799,
    discount: "56% OFF",
  },
  {
    id: "s06",
    brand: "Puma",
    title: "Everyday Casual Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.8,
    reviews: 342,
    price: 1999,
    oldPrice: 3999,
    discount: "50% OFF",
  },
  {
    id: "s07",
    brand: "Allen Solly",
    title: "Classic Regular Fit Polo",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.6,
    reviews: 76,
    price: 899,
    oldPrice: 1999,
    discount: "55% OFF",
  },
  {
    id: "s08",
    brand: "Zara",
    title: "Relaxed Fit Linen Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.7,
    reviews: 143,
    price: 1299,
    oldPrice: 2599,
    discount: "50% OFF",
  },
  {
    id: "s09",
    brand: "H&M",
    title: "Women's Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.8,
    reviews: 189,
    price: 1199,
    oldPrice: 2499,
    discount: "52% OFF",
  },
  {
    id: "s10",
    brand: "Mango",
    title: "Elegant Midi Dress",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.9,
    reviews: 231,
    price: 1599,
    oldPrice: 3499,
    discount: "54% OFF",
  },
  {
    id: "s11",
    brand: "Levis",
    title: "High Rise Straight Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80",
    badge: "SALE",
    rating: 4.7,
    reviews: 198,
    price: 1399,
    oldPrice: 2999,
    discount: "53% OFF",
  },
  {
    id: "s12",
    brand: "Jack & Jones",
    title: "Slim Fit Stretch Trousers",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.5,
    reviews: 64,
    price: 1099,
    oldPrice: 2299,
    discount: "52% OFF",
  },
  {
    id: "s13",
    brand: "Bewakoof",
    title: "Oversized Graphic Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.6,
    reviews: 278,
    price: 899,
    oldPrice: 1999,
    discount: "55% OFF",
  },
  {
    id: "s14",
    brand: "HRX",
    title: "Performance Active T-Shirt",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.8,
    reviews: 315,
    price: 749,
    oldPrice: 1499,
    discount: "50% OFF",
  },
  {
    id: "s15",
    brand: "Nike",
    title: "Essential Running Sneakers",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.9,
    reviews: 456,
    price: 2499,
    oldPrice: 4999,
    discount: "50% OFF",
  },
  {
    id: "s16",
    brand: "Adidas",
    title: "Classic Street Sneakers",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.7,
    reviews: 289,
    price: 2299,
    oldPrice: 4499,
    discount: "49% OFF",
  },
  {
    id: "s17",
    brand: "Fossil",
    title: "Minimal Analog Wrist Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.8,
    reviews: 176,
    price: 3499,
    oldPrice: 6999,
    discount: "50% OFF",
  },
  {
    id: "s18",
    brand: "Titan",
    title: "Elegant Classic Watch",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    badge: "SALE",
    rating: 4.9,
    reviews: 267,
    price: 2999,
    oldPrice: 5999,
    discount: "50% OFF",
  },
  {
    id: "s19",
    brand: "Lavie",
    title: "Structured Women's Handbag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.6,
    reviews: 132,
    price: 1299,
    oldPrice: 2799,
    discount: "54% OFF",
  },
  {
    id: "s20",
    brand: "Caprese",
    title: "Premium Shoulder Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.7,
    reviews: 98,
    price: 1499,
    oldPrice: 2999,
    discount: "50% OFF",
  },
  {
    id: "s21",
    brand: "Fastrack",
    title: "Classic Black Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.5,
    reviews: 145,
    price: 999,
    oldPrice: 1999,
    discount: "50% OFF",
  },
  {
    id: "s22",
    brand: "Vogue",
    title: "Premium Round Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.8,
    reviews: 201,
    price: 1299,
    oldPrice: 2499,
    discount: "48% OFF",
  },
  {
    id: "s23",
    brand: "Mast & Harbour",
    title: "Casual Denim Jacket",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.6,
    reviews: 112,
    price: 1599,
    oldPrice: 3299,
    discount: "52% OFF",
  },
  {
    id: "s24",
    brand: "Levis",
    title: "Classic Blue Denim Jacket",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=500&q=80",
    badge: "SALE",
    rating: 4.8,
    reviews: 174,
    price: 1899,
    oldPrice: 3999,
    discount: "53% OFF",
  },
  {
    id: "s25",
    brand: "H&M",
    title: "Soft Knit Casual Sweater",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.7,
    reviews: 91,
    price: 1199,
    oldPrice: 2499,
    discount: "52% OFF",
  },
  {
    id: "s26",
    brand: "Zara",
    title: "Premium Oversized Knitwear",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    rating: 4.9,
    reviews: 203,
    price: 1799,
    oldPrice: 3999,
    discount: "55% OFF",
  },
  {
    id: "s27",
    brand: "U.S. Polo Assn.",
    title: "Classic Casual Polo Shirt",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.6,
    reviews: 154,
    price: 999,
    oldPrice: 2199,
    discount: "55% OFF",
  },
  {
    id: "s28",
    brand: "Peter England",
    title: "Formal Slim Fit Shirt",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80",
    badge: "SALE",
    rating: 4.7,
    reviews: 188,
    price: 899,
    oldPrice: 1999,
    discount: "55% OFF",
  },
  {
    id: "s29",
    brand: "Mango",
    title: "Minimal Elegant Blazer",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80",
    badge: "PREMIUM",
    rating: 4.9,
    reviews: 117,
    price: 2499,
    oldPrice: 4999,
    discount: "50% OFF",
  },
  {
    id: "s30",
    brand: "Allen Solly",
    title: "Modern Formal Blazer",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    rating: 4.8,
    reviews: 142,
    price: 2799,
    oldPrice: 5999,
    discount: "53% OFF",
  },
];







const Bestdealtoday = () => {
    return (
    <>

          <section
    id="deals"
    className="container pt-4 pt-lg-5"
    aria-label="Best deals today"
>
    <div className="row align-items-center g-4 mb-3">
        <div className="col-12 col-lg-7">
            <h2 className="font-bold text-[#17178F] text-3xl md:text-4xl mb-2">
                Best Deals Today
            </h2>

            <p className="text-[#777777] mb-0">
                Discover our biggest discounts across fashion, essentials and new season styles.
            </p>
        </div>


     

        <div className="col-12 col-lg-5">
            {/* Sale Countdown */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-2">
                <span className="font-semibold text-[#17178F] text-sm me-1">
                    Sale Ends In
                </span>

                <div className="bg-white border border-[#E7E6F6] rounded-xl px-3 py-1 text-center">
                    <div
                        className="font-bold text-[#17178F] text-lg leading-tight"
                        id="cdDays"
                        aria-hidden="true"
                    >
                        02
                    </div>
                    <div className="text-xs text-[#777777]">DAYS</div>
                </div>

                <div className="bg-white border border-[#E7E6F6] rounded-xl px-3 py-1 text-center">
                    <div
                        className="font-bold text-[#17178F] text-lg leading-tight"
                        id="cdHours"
                        aria-hidden="true"
                    >
                        23
                    </div>
                    <div className="text-xs text-[#777777]">HRS</div>
                </div>

                <div className="bg-white border border-[#E7E6F6] rounded-xl px-3 py-1 text-center">
                    <div
                        className="font-bold text-[#17178F] text-lg leading-tight"
                        id="cdMins"
                        aria-hidden="true"
                    >
                        58
                    </div>
                    <div className="text-xs text-[#777777]">MIN</div>
                </div>

                <div className="bg-white border border-[#E7E6F6] rounded-xl px-3 py-1 text-center">
                    <div
                        className="font-bold text-[#17178F] text-lg leading-tight"
                        id="cdSecs"
                        aria-hidden="true"
                    >
                        49
                    </div>
                    <div className="text-xs text-[#777777]">SEC</div>
                </div>
            </div>
        </div>
    </div>

    {/* ========================================
        SALE CATEGORY SHORTCUTS
    ======================================== */}
    <div
        id="categoryShortcuts"
        className="d-flex flex-wrap gap-2 mb-3"
        aria-label="Sale categories"
    >
        <button
            type="button"
            className="btn rounded-pill px-3 text-sm font-semibold border bg-[#17178F] text-white border-[#17178F]"
            data-cat="all"
            aria-pressed="true"
        >
            All Sale <span className="opacity-75">24</span>
        </button>

        <button
            type="button"
            className="btn rounded-pill px-3 text-sm font-semibold border bg-white text-[#111111] border-[#E7E6F6]"
            data-cat="men"
            aria-pressed="false"
        >
            Men <span className="opacity-75">8</span>
        </button>

        <button
            type="button"
            className="btn rounded-pill px-3 text-sm font-semibold border bg-white text-[#111111] border-[#E7E6F6]"
            data-cat="women"
            aria-pressed="false"
        >
            Women <span className="opacity-75">6</span>
        </button>

        <button
            type="button"
            className="btn rounded-pill px-3 text-sm font-semibold border bg-white text-[#111111] border-[#E7E6F6]"
            data-cat="accessories"
            aria-pressed="false"
        >
            Accessories <span className="opacity-75">5</span>
        </button>

        <button
            type="button"
            className="btn rounded-pill px-3 text-sm font-semibold border bg-white text-[#111111] border-[#E7E6F6]"
            data-cat="footwear"
            aria-pressed="false"
        >
            Footwear <span className="opacity-75">5</span>
        </button>
    </div>

    {/* ========================================
        FILTER & SORT CONTROLS
    ======================================== */}
    <div className="d-flex flex-wrap align-items-center gap-2 bg-white border border-[#E7E6F6] rounded-xl px-3 py-2 mb-3">
        <span
            id="productCount"
            className="fw-semibold text-[#17178F]"
        >
            Showing 24 Products
        </span>

        <div className="d-flex flex-wrap gap-2 ms-auto align-items-center">
            <button
                type="button"
                id="btnFilters"
                className="btn bg-white border border-[#E7E6F6] rounded-pill px-3 font-semibold text-sm"
                aria-label="Open product filters"
                aria-expanded="false"
            >
                <i className="bi bi-funnel me-1" aria-hidden="true"></i>
                Filters
            </button>

            <div className="dropdown">
                <button
                    type="button"
                    id="sortBtn"
                    className="btn bg-white border border-[#E7E6F6] rounded-pill px-3 font-semibold text-sm dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Sort By: Featured
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                        <button
                            type="button"
                            className="dropdown-item"
                            data-sort="featured"
                        >
                            Featured
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item"
                            data-sort="priceAsc"
                        >
                            Price: Low to High
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item"
                            data-sort="priceDesc"
                        >
                            Price: High to Low
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item"
                            data-sort="discount"
                        >
                            Highest Discount
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item"
                            data-sort="rating"
                        >
                            Top Rated
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item"
                            data-sort="newest"
                        >
                            Newest
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <p
        id="searchInfo"
        className="text-sm text-[#777777] mb-2"
        aria-live="polite"
    ></p>

    <p
        id="cartFeedback"
        className="text-sm font-semibold text-[#17178F] d-none mb-2"
        aria-live="polite"
    ></p>

    {/* ========================================
        PRODUCT GRID
    ======================================== */}
    <div id="productGrid" className="row g-3 g-lg-4">



              {/* Product 1 */}
       

       {cardData.map((card) => (
             


             <div className="col-6 col-md-4 col-lg-3 col-xxl-2">
            
       
           <ProductCard image={card.image} title={card.title} brand={card.brand} rating={card.rating} price={card.price} oldPrice={card.oldPrice} discount={card.discount}/>
     </div>
    

            ))}

      
       
    </div>

    {/* Empty State */}
    <div
        id="emptyState"
        className="d-none bg-white border border-[#E7E6F6] rounded-2xl p-5 text-center my-4"
    >
        <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-[#F1EFFA] text-[#17178F] w-14 h-14 mb-3">
            <i className="bi bi-search text-2xl" aria-hidden="true"></i>
        </span>

        <h3 className="font-semibold text-[#17178F] text-xl mb-2">
            No products found
        </h3>

        <p className="text-[#777777] mb-3">
            Try changing your filters or search terms.
        </p>

        <button
            type="button"
            id="btnClearAllEmpty"
            className="btn bg-[#C0BFF9] text-[#17178F] border-0 rounded-pill font-semibold px-4"
        >
            Clear Filters
        </button>
    </div>

    {/* Load More */}
    <div id="loadMoreWrap" className="text-center pt-4">
        <button
            type="button"
            id="btnLoadMore"
            className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-pill font-semibold px-4"
        >
            Load More Products
            <i className="bi bi-arrow-down ms-1" aria-hidden="true"></i>
        </button>
    </div>

    {/* ========================================
        SECOND PROMOTIONAL BANNER
    ======================================== */}
    {/* <section
        className="mt-4 mt-lg-5"
        aria-label="Seasonal edit promotion"
    >
        <div className="bg-white border border-[#E7E6F6] rounded-3xl overflow-hidden">
            <div className="row g-0 align-items-stretch">

                <div className="col-12 col-lg-6 order-lg-2">
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
                        alt="Seasonal edit sale up to 40 percent off fashion collection"
                        className="w-100 h-64 md:h-80 object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="col-12 col-lg-6 order-lg-1 d-flex">
                    <div className="p-4 p-md-5 d-flex flex-column justify-content-center w-100 bg-[#F8F8FC]">

                        <span className="text-xs font-semibold tracking-widest uppercase text-[#777777] mb-2">
                            <span className="text-[#17178F]">
                                SEASONAL EDIT
                            </span>
                        </span>

                        <h3 className="font-extrabold text-[#17178F] text-3xl md:text-4xl mb-2">
                            Up To 40% Off
                        </h3>

                        <p className="text-[#777777] font-semibold mb-4">
                            Refresh Your Style
                        </p>

                        <div>
                            <a
                                href="#deals"
                                className="btn bg-[#17178F] text-white border-0 rounded-pill font-semibold px-4 py-2"
                            >
                                SHOP COLLECTION
                                <i
                                    className="bi bi-arrow-right ms-1"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section> */}
</section>

   
        </>
    ) 
}       

export default Bestdealtoday;