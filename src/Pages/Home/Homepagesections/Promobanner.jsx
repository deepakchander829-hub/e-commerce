










import Bannercard from "../../../Components/Bannercard";


const proomotionbanner = [

  "/Banner/banne1.png",
  "/Banner/banner.png",
  "/Banner/Blue and White Classic Furniture Sale Banner.png",
  "/Banner/Blue and White Classic Furniture Sale Banner (1).png",
  "/Banner/Blue and White Classic Furniture Sale Banner (2).png",
  "/Banner/Blue and White Classic Furniture Sale Banner (3).png",
  "/Banner/Blue and White Classic Furniture Sale Banner (4).png",
  "/Banner/Blue and White Classic Furniture Sale Banner (5).png",
  "/Banner/Blue and White Classic Furniture Sale Banner (6).png"



];  


const Promotionbnanner = () => {
    return (


      <section className="bg-white">  
  

<div
  className="d-flex flex-nowrap overflow-auto   p-2 p-lg-5   gap-1 gap-lg-5  "
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>

    {proomotionbanner.map((banner, index) => (  
        <Bannercard key={index} banner={banner} />  
    ))}
</div>

</section>

    )
}

export default Promotionbnanner