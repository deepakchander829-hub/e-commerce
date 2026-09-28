

const  Subcollection = (props) =>{


  return (

       <article className="h-100 position-relative rounded-3xl overflow-hidden border border-[#E7E6F6] min-h-72 md:min-h-[28rem]">

        <img
          src={props.image}
          alt="VibeCraft women's fashion collection"
          className="position-absolute top-0 start-0 w-100 h-100 object-cover"
          loading="lazy"
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-[#17178F]/50"
          aria-hidden="true"
        ></div>

        <div className="position-relative p-4 p-md-5 d-flex flex-column justify-content-end h-100 text-white">

          <p className="text-xs font-semibold tracking-widest uppercase text-[#C0BFF9] mb-1">
            {props.category}
          </p>

          <h3 className="font-bold text-2xl md:text-3xl mb-1">
            {props.title}
          </h3>

          <p className="text-white/85 text-sm mb-3">
            {props.description}
          </p>

          <a
            href={props.link}
            className="btn bg-white text-[#17178F] rounded-xl font-semibold px-4 py-2 align-self-start"
          >
            {props.buttonText}
            <i
              className="bi bi-arrow-right ms-1"
              aria-hidden="true"
            ></i>
          </a>

        </div>
      </article>
  )

}

export default Subcollection;