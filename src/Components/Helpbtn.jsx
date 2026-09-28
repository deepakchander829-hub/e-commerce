

const Helpbtn = (props) => {
    return (
        <>

          <article className="h-100 bg-[#F8F8FC] border border-[#E7E6F6] rounded-2xl p-4 d-flex flex-column">

                    <div className="d-inline-flex align-items-center justify-content-center shrink-0 rounded-lg bg-[#C0BFF9]/30 text-[#17178F] w-12 h-12">
                        <i
                            className={props.icon}
                            aria-hidden="true"
                        ></i>
                    </div>

                    <h3 className="font-semibold text-lg text-[#17178F] mt-3 mb-2">
                        {props.heading}
                    </h3>

                    <p className="text-[#777777] mb-0">
                        {props.para}
                    </p>

                    <div className="mt-auto pt-4">
                        <a
                            href="#"
                            className="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-pill px-3 font-semibold"
                        >
                            Learn more
                            <i
                                className="bi bi-arrow-right ms-1"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                </article>
    
        </>
    );
};  

export default Helpbtn;