

<section
  id="latestDrops"
  className="container pt-4 pt-lg-5"
  aria-label="Latest drops product listing"
>
  <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-2">
    <div>
      <h2 className="font-bold text-2xl md:text-3xl text-[#17178F] mb-1">
        Latest Drops
      </h2>

      <p className="text-[#777777] text-sm mb-0">
        Meet the newest additions to VibeCraft.
      </p>
    </div>

    <p
      id="productCount"
      className="text-[#17178F] font-semibold text-sm mb-0"
    >
      24 New Products
    </p>
  </div>

  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
    <button
      type="button"
      id="btnFilters"
      className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold px-3 d-lg-none"
      data-bs-toggle="offcanvas"
      data-bs-target="#filterOffcanvas"
      aria-controls="filterOffcanvas"
      aria-label="Open product filters"
    >
      <i className="bi bi-sliders me-1" aria-hidden="true"></i>
      Filters
    </button>

    <div className="dropdown">
      <button
        type="button"
        id="sortBtn"
        className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold px-3 dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By: Newest
      </button>

      <ul className="dropdown-menu border border-[#E7E6F6] rounded-2xl">
        <li>
          <button className="dropdown-item" type="button" data-sort="newest">
            Newest
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" data-sort="featured">
            Featured
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" data-sort="priceAsc">
            Price: Low to High
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" data-sort="priceDesc">
            Price: High to Low
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" data-sort="rating">
            Highest Rated
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button" data-sort="popular">
            Most Popular
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div
    className="d-none d-lg-flex flex-wrap align-items-center gap-4 bg-white border border-[#E7E6F6] rounded-2xl p-3 mb-3"
    id="desktopFilters"
    aria-label="Product filters"
  >
    {/* Category */}
    <div>
      <h3 className="text-xs font-semibold text-[#777777] uppercase tracking-widest mb-1">
        Category
      </h3>

      <div className="d-flex flex-wrap gap-x-3 gap-y-1">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="fCat"
            value="men"
            id="dskCatMen"
          />
          <label className="form-check-label text-sm" htmlFor="dskCatMen">
            Men
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="fCat"
            value="women"
            id="dskCatWomen"
          />
          <label className="form-check-label text-sm" htmlFor="dskCatWomen">
            Women
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="fCat"
            value="accessories"
            id="dskCatAcc"
          />
          <label className="form-check-label text-sm" htmlFor="dskCatAcc">
            Accessories
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="fCat"
            value="footwear"
            id="dskCatFoot"
          />
          <label className="form-check-label text-sm" htmlFor="dskCatFoot">
            Footwear
          </label>
        </div>
      </div>
    </div>
  </div>

  <p
    id="searchInfo"
    className="text-[#777777] text-sm mb-2"
    aria-live="polite"
  ></p>

  <p
    id="cartFeedback"
    className="bg-[#F1EFFA] border border-[#E7E6F6] text-[#17178F] text-sm font-semibold rounded-xl px-3 py-2 d-none"
    aria-live="polite"
  ></p>

  <div id="productGrid" className="row g-3 g-md-4">
    {/* Product cards */}
  </div>

  <div id="emptyState" className="d-none text-center py-5">
    <i
      className="bi bi-box-seam text-[#C0BFF9] text-[3rem]"
      aria-hidden="true"
    ></i>

    <h3
      id="emptyTitle"
      className="font-bold text-xl text-[#17178F] mt-2 mb-1"
    >
      No new arrivals found.
    </h3>

    <p
      id="emptyText"
      className="text-[#777777] text-sm mb-3"
    >
      Try changing your filters.
    </p>

    <button
      type="button"
      id="btnClearSearch"
      className="btn bg-[#17178F] text-white rounded-xl font-semibold px-4 d-none"
    >
      Clear Search
    </button>

    <button
      type="button"
      id="btnClearFiltersEmpty"
      className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold px-4"
    >
      Clear All Filters
    </button>
  </div>

  <div id="loadMoreWrap" className="text-center pt-4 pb-2">
    <p id="showingInfo" className="text-xs text-[#777777] mb-2">
      Showing 12 of 24 products
    </p>

    <button
      type="button"
      id="btnLoadMore"
      className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold px-5"
    >
      Load More
    </button>
  </div>
</section>
