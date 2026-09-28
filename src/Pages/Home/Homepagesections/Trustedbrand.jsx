

import Brandbtn from "../../../Components/Brandbtn";



const companies = [ 
  {
    id: 1,
    name: "Nike",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nike.svg"
  },
  {
    id: 2,
    name: "Adidas",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/adidas.svg"
  },
  {
    id: 3,
    name: "Puma",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/puma.svg"
  },
  {
    id: 4,
    name: "Under Armour",
    img: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/underarmour.svg"
  },
  {
    id: 5,
    name: "Vans",
    img: "https://images.seeklogo.com/logo-png/25/2/vans-logo-png_seeklogo-257446.png"
  },
  {
    id: 6,
    name: "Converse",
    img: "https://static.vecteezy.com/system/resources/thumbnails/023/599/206/small_2x/converse-all-star-brand-logo-shoes-black-symbol-design-illustration-free-vector.jpg"
  },
  {
    id: 7,
    name: "Levi's",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4U9cDIEcZKjoxtaZ-BhtmSMtj-4cV_kbc8FrY1TnQzQ&s=10"
  },
  {
    id: 8,
    name: "ASICS",
    img: "https://logos-world.net/wp-content/uploads/2020/05/Asics-Logo.png"
  },
  {
    id: 9,
    name: "New Balance",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m-VvI5yV6h6wD9Zf3O4YF2qQ2jLgM0jN2w&s=10"
  },
  {
    id: 10,
    name: "Reebok",
    img: "  https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/reebok.svg"
  }
];

const Trustedbrands = () => {
  return (


    <div
  className="d-flex flex-nowrap overflow-auto gap-2 gap-lg-5 p-3 p-lg-5 pb-2 !px-lg-10 "

>

      {companies.map((brand) => (
        <div
          key={brand.id}
          className="flex-shrink-0  d-flex align-items-center justify-content-center  gap-5"
          style={{
            width: "100px", 
           
          }}
        >

            <Brandbtn img={brand.img} />
            
         

     </div>
      ))}
    </div>
  );
};

export default Trustedbrands;
