

const Faqbtn = (props) => {
    return (
      

        <div className="h-100 bg-white border border-[#E7E6F6] rounded-2xl p-3 p-md-4 d-flex flex-column align-items-center">
        <i
          className={`${props.icon} text-[#17178F] text-2xl mb-2`}
          aria-hidden="true"
        ></i>

        <p className="font-bold text-xs md:text-lg text-[#17178F] mb-0">
          {props.title}
        </p>

        <p className="text-xs text-[#777777] mb-0">
          {props.description}
        </p>
      </div>

    );
};
export default Faqbtn;