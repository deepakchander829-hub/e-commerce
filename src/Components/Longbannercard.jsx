




const Longbannercard = (props) => {
  return (
        <div className="w-full shrink-0 overflow-hidden md:w-[80%] lg:w-full     ">
        <img
            src={props.banner}
    alt="Promotion Banner"
    className="block h-auto w-full object-cover"
    loading="lazy"
  />
</div>

  );
};

export default Longbannercard;
