

import Collectioncard from "../../../Components/Collectioncard";  



const collectionData = [
  {
    id: 1,
    number: "01",
    category: "Everyday",
    title: "Everyday Essentials",
    description: "Effortless pieces for everyday life.",
    image:
      "https://images.unsplash.com/photo-1490481651871-68abde25d43d?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 2,
    number: "02",
    category: "Denim",
    title: "Denim Collection",
    description: "Classic denim styles made for every occasion.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 3,
    number: "03",
    category: "Footwear",
    title: "Step In Style",
    description: "Modern footwear designed for comfort and style.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 4,
    number: "04",
    category: "Accessories",
    title: "Modern Accessories",
    description: "Complete your look with refined accessories.",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 5,
    number: "05",
    category: "Watches",
    title: "Timeless Watches",
    description: "Elegant watches designed for every moment.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 6,
    number: "06",
    category: "Streetwear",
    title: "Urban Streetwear",
    description: "Bold everyday styles inspired by city life.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 7,
    number: "07",
    category: "Summer",
    title: "Summer Styles",
    description: "Lightweight and fresh pieces for sunny days.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 8,
    number: "08",
    category: "Formal",
    title: "Formal Edit",
    description: "Sharp and sophisticated looks for special occasions.",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 9,
    number: "09",
    category: "Women",
    title: "Women's Collection",
    description: "Contemporary fashion designed for modern women.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 10,
    number: "10",
    category: "Men",
    title: "Men's Collection",
    description: "Versatile styles crafted for the modern man.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 11,
    number: "11",
    category: "T-Shirts",
    title: "Essential T-Shirts",
    description: "Comfortable everyday tees with a clean modern look.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 12,
    number: "12",
    category: "Jackets",
    title: "Layer Up",
    description: "Stylish jackets for cool days and effortless layering.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 13,
    number: "13",
    category: "Dresses",
    title: "Elegant Dresses",
    description: "Beautiful silhouettes made for every occasion.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 14,
    number: "14",
    category: "Shirts",
    title: "Classic Shirts",
    description: "Refined shirts that work perfectly from day to evening.",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 15,
    number: "15",
    category: "Bags",
    title: "Carry In Style",
    description: "Functional and fashionable bags for every lifestyle.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 16,
    number: "16",
    category: "Sneakers",
    title: "Everyday Sneakers",
    description: "Fresh sneaker styles built for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 17,
    number: "17",
    category: "Hoodies",
    title: "Cozy Hoodies",
    description: "Relaxed hoodies made for comfort and casual style.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 18,
    number: "18",
    category: "Trousers",
    title: "Modern Trousers",
    description: "Smart and versatile trousers for every wardrobe.",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 19,
    number: "19",
    category: "Jewellery",
    title: "Fine Jewellery",
    description: "Delicate pieces that add a refined finishing touch.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
  {
    id: 20,
    number: "20",
    category: "Sunglasses",
    title: "Summer Shades",
    description: "Statement sunglasses designed to elevate your look.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&h=800&q=80",
    link: "shop.html",
  },
];
const Editorialcollection = () => {
  return (
    <section className="container-fluid  ps-3 py-3 px-lg-5 py-lg-5">

      <div
        className="d-flex flex-nowrap overflow-auto gap-3 gap-lg-4 pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {collectionData.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-100"
            style={{ maxWidth: "400px" }}
          >
            <Collectioncard
              number={card.number}
              category={card.category}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Editorialcollection;
