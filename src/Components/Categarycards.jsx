

const CategoryCards = (props) => {
    return (

         <a
  href="shop.html"
  className="d-flex  flex-column align-items-center text-decoration-none "
>
  <img
    src={props.image}
    alt={props.name}
    className="rounded-circle object-fit-cover d-block"
    style={{
      width: "120px",
      height: "120px",
    }}
    loading="lazy"
  />

  <span
    className="d-block   text-black   p-2 rounded-3  text-center fw-semibold small mt-2 "
      
  >
    {props.name}
  </span>
</a>

    );
};

export default CategoryCards;