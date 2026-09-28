






const Collectioncard = (props) => {
    return (
       <div className="h-100">

  <article className="h-100 bg-white border border-[#E7E6F6] rounded-2xl overflow-hidden d-flex flex-column">

    <img
      src={props.image}
      alt={props.alt}
      className="w-100 object-cover h-64 md:h-72"
      loading="lazy"
    />

    <div className="p-4 d-flex flex-column flex-grow-1">

      <p className="text-xs uppercase tracking-widest text-[#777777] mb-1">
         {props.number} &middot; {props.category}
      </p>

      <h3 className="font-extrabold text-xl text-[#17178F] mb-1">
        {props.title}
      </h3>

      <p className="text-sm text-[#777777] flex-grow-1 mb-3">
        {props.description}
      </p>

      <a
        href={props.link}
        className="btn  text-purple-950  rounded-xl !font-semibold text-sm px-3 py-2 align-self-start"
      >
        Explore Collection
         <i className="bi bi-arrow-right  ps-2 pt-4"></i>  
      </a>

    </div>
  </article>
</div>

    )
}

export default Collectioncard;