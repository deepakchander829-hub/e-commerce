





const  b = () => {

 return  (


    <section
  className="container pt-4 pt-lg-5"
  aria-label="New season editorial collection"
>
  <div className="row g-0 rounded-3xl overflow-hidden bg-white border border-[#E7E6F6] align-items-stretch">
    {/* Asymmetric image side */}
    <div className="col-12 col-lg-7 position-relative min-h-72">
      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80"
        alt="New season clothing collection arranged on racks"
        className="position-absolute top-0 start-0 w-100 h-100 object-cover"
        loading="lazy"
      />
    </div>

    {/* Editorial copy panel */}
    <div className="col-12 col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#777777] mb-2">
        The Latest Edit
      </p>

      <h2 className="font-extrabold text-3xl md:text-4xl text-[#17178F] mb-3">
        New Season Edit
      </h2>

      <p className="text-[#777777] mb-4">
        Fresh silhouettes, refined essentials and statement pieces designed for
        the season ahead.
      </p>

      <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
        <li className="d-flex align-items-center gap-2 text-sm text-[#111111]">
          <i
            className="bi bi-check-circle-fill text-[#17178F]"
            aria-hidden="true"
          ></i>
          New silhouettes, just landed
        </li>

        <li className="d-flex align-items-center gap-2 text-sm text-[#111111]">
          <i
            className="bi bi-check-circle-fill text-[#17178F]"
            aria-hidden="true"
          ></i>
          Refined everyday essentials
        </li>

        <li className="d-flex align-items-center gap-2 text-sm text-[#111111]">
          <i
            className="bi bi-check-circle-fill text-[#17178F]"
            aria-hidden="true"
          ></i>
          Statement pieces for the season
        </li>
      </ul>

      <a
        href="#latestDrops"
        className="btn bg-[#17178F] text-white border-0 rounded-xl font-semibold px-4 py-2 align-self-start"
      >
        Explore The Collection{" "}
        <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</section>

 )
      
}