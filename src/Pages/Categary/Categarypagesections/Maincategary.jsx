

import Categaryrectanglecard from "../../../Components/Categaryrectanglecard";

const categories = [
  {
    id: 1,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    description: "Contemporary styles for every occasion",
    link: "#",
    wishlistLabel: "Add Women category to wishlist",
    shopText: "Shop Women",
  },
  {
    id: 2,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80",
    description: "Modern essentials and everyday classics",
    link: "#",
    wishlistLabel: "Add Men category to wishlist",
    shopText: "Shop Men",
  },
  {
    id: 3,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    description: "Comfortable styles made for little ones",
    link: "#",
    wishlistLabel: "Add Kids category to wishlist",
    shopText: "Shop Kids",
  },
  {
    id: 4,
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
    description: "Sneakers, casuals and statement shoes",
    link: "#",
    wishlistLabel: "Add Footwear category to wishlist",
    shopText: "Shop Footwear",
  },
  {
    id: 5,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
    description: "Complete your look",
    link: "#",
    wishlistLabel: "Add Accessories category to wishlist",
    shopText: "Shop Accessories",
  },
  {
    id: 6,
    name: "Jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    description: "Minimal pieces with maximum impact",
    link: "#",
    wishlistLabel: "Add Jewellery category to wishlist",
    shopText: "Shop Jewellery",
  },
  {
    id: 7,
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "Timeless everyday watches",
    link: "#",
    wishlistLabel: "Add Watches category to wishlist",
    shopText: "Shop Watches",
  },
  {
    id: 8,
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    description: "Designed for style and function",
    link: "#",
    wishlistLabel: "Add Bags category to wishlist",
    shopText: "Shop Bags",
  },
  {
    id: 9,
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    description: "Comfortable everyday styles",
    link: "#",
    wishlistLabel: "Add T-Shirts category to wishlist",
    shopText: "Shop T-Shirts",
  },
  {
    id: 10,
    name: "Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    description: "Classic denim made for everyday wear",
    link: "#",
    wishlistLabel: "Add Jeans category to wishlist",
    shopText: "Shop Jeans",
  },
  {
    id: 11,
    name: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    description: "Elegant styles for every occasion",
    link: "#",
    wishlistLabel: "Add Dresses category to wishlist",
    shopText: "Shop Dresses",
  },
  {
    id: 12,
    name: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    description: "Stylish layers for every season",
    link: "#",
    wishlistLabel: "Add Jackets category to wishlist",
    shopText: "Shop Jackets",
  },
  {
    id: 13,
    name: "Shirts",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=600&q=80",
    description: "Classic shirts for day and evening",
    link: "#",
    wishlistLabel: "Add Shirts category to wishlist",
    shopText: "Shop Shirts",
  },
  {
    id: 14,
    name: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
    description: "Fresh styles built for everyday comfort",
    link: "#",
    wishlistLabel: "Add Sneakers category to wishlist",
    shopText: "Shop Sneakers",
  },
  {
    id: 15,
    name: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    description: "Cozy styles for casual days",
    link: "#",
    wishlistLabel: "Add Hoodies category to wishlist",
    shopText: "Shop Hoodies",
  },
  {
    id: 16,
    name: "Trousers",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80",
    description: "Smart and versatile everyday trousers",
    link: "#",
    wishlistLabel: "Add Trousers category to wishlist",
    shopText: "Shop Trousers",
  },
  {
    id: 17,
    name: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    description: "Statement shades to elevate your look",
    link: "#",
    wishlistLabel: "Add Sunglasses category to wishlist",
    shopText: "Shop Sunglasses",
  },
  {
    id: 18,
    name: "Sportswear",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    description: "Performance styles for an active lifestyle",
    link: "#",
    wishlistLabel: "Add Sportswear category to wishlist",
    shopText: "Shop Sportswear",
  },
  {
    id: 19,
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    description: "Beauty essentials for your daily routine",
    link: "#",
    wishlistLabel: "Add Beauty category to wishlist",
    shopText: "Shop Beauty",
  },
  {
    id: 20,
    name: "Perfumes",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    description: "Signature fragrances for every mood",
    link: "#",
    wishlistLabel: "Add Perfumes category to wishlist",
    shopText: "Shop Perfumes",
  },
];



const Maincategary = () =>{
    return(

    <section
  id="shopByCategory"
  className="container pt-4 pt-lg-5"
  aria-label="Shop by category cards"
>
  {/* Heading */}
  <div className="d-flex align-items-end justify-content-between mb-3">
    <div>
      <h2 className="font-bold text-2xl md:text-3xl text-[#17178F] mb-1">
        Shop by Category
      </h2>

      <p className="text-[#777777] text-sm mb-0">
        Explore our collections and find pieces that fit your style.
      </p>
    </div>

    <a
      href="#featuredCollections"
      className="text-[#17178F] font-semibold text-sm text-decoration-none d-none d-md-inline"
    >
      View Collections{" "}
      <i className="bi bi-arrow-right" aria-hidden="true"></i>
    </a>
  </div>

  {/* Category Grid */}
  <div id="mainCategoryGrid" className="row g-3 g-md-4">

   {categories.map((category, index) => (

       <div className="col-6 col-md-4 col-lg-3">
       
     
  
        <Categaryrectanglecard key={index}  name={category.name} category={category} img={category.image}  description={category.description} link={category.link} shopText={category.shopText} />
        
    </div>
        
     )) }
 

  </div>
</section>

    
    )
}   

export default Maincategary;    