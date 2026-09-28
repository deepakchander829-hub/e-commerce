import banner1 from "../../../assets/Longbanner/Black and White Modern New Product Sale Banner Landscape.png";
import banner2 from "../../../assets/Longbanner/Black and White Modern New Product Sale Banner Landscape (1).png";
import banner3 from "../../../assets/Longbanner/Black and White Modern New Product Sale Banner Landscape (2).png";
import banner4 from "../../../assets/Longbanner/Black and White Modern New Product Sale Banner Landscape (3).png";
import banner5 from "../../../assets/Longbanner/Black and White Modern New Product Sale Banner Landscape (4).png";
import banner6 from "../../../assets/Longbanner/Black and White Modern New Product Sale Banner Landscape (5).png"

import Longbannercard from "../../../Components/Longbannercard";

const promotionbanner = [
  banner1,      
  banner2,
  banner3,
  banner4,
  banner5, 
  banner6,           
];

const Longbanner = () => {
  return (
    <section className="bg-white">
      <div
        className="d-flex flex-nowrap overflow-auto  gap-1 gap-lg-5"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
         
        }}
      >
     
        {promotionbanner.map((banner, index) => (
          <Longbannercard key={index} banner={banner} />
        ))}
      </div>
    </section>
  );
};

export default Longbanner;
