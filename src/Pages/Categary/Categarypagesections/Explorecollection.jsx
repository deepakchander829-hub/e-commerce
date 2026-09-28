import Subcollection from "../../../Components/Subcollectioncard";

const collectionData = [
  {
    id: 1,
    category: "Women's Edit",
    title: "Elegant Everyday Styles",
    description:
      "Refined dresses, co-ords and easy layers for every occasion.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Women",
    link: "#",
  },
  {
    id: 2,
    category: "Men's Edit",
    title: "Modern Essentials",
    description:
      "Classic pieces with a clean, modern edge.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Men",
    link: "#",
  },
  {
    id: 3,
    category: "Kids Collection",
    title: "Comfort Meets Style",
    description:
      "Playful, durable and easy to wear.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Kids",
    link: "#",
  },
  {
    id: 4,
    category: "Footwear Edit",
    title: "Step Into Style",
    description:
      "Discover sneakers and footwear made for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Footwear",
    link: "#",
  },
  {
    id: 5,
    category: "Denim Collection",
    title: "Classic Denim",
    description:
      "Timeless denim pieces designed for effortless styling.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Denim",
    link: "#",
  },
  {
    id: 6,
    category: "Accessories Edit",
    title: "Complete Your Look",
    description:
      "Add the perfect finishing touch with stylish accessories.",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Accessories",
    link: "#",
  },
  {
    id: 7,
    category: "Bags Collection",
    title: "Carry In Style",
    description:
      "Functional and fashionable bags for every lifestyle.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Bags",
    link: "#",
  },
  {
    id: 8,
    category: "Watch Collection",
    title: "Timeless Watches",
    description:
      "Elegant watches designed to complement every moment.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Watches",
    link: "#",
  },
  {
    id: 9,
    category: "Streetwear Edit",
    title: "Urban Street Style",
    description:
      "Bold and comfortable styles inspired by city life.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Streetwear",
    link: "#",
  },
  {
    id: 10,
    category: "Summer Collection",
    title: "Fresh Summer Styles",
    description:
      "Lightweight and effortless pieces for sunny days.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Summer",
    link: "#",
  },
];

const Editorialcollection = () => {
  return (
    <section
      id="featuredCollections"
      className="container pt-4 pt-lg-5"
      aria-label="Featured category collections"
    >
      {/* Heading */}
      <div className="mb-3">
        <h2 className="font-bold text-2xl md:text-3xl text-[#17178F] mb-1">
          Explore Collections
        </h2>

        <p className="text-[#777777] text-sm mb-0">
          Curated edits across fashion, footwear and everyday style.
        </p>
      </div>

      {/* Cards */}
     <div className="row g-3 g-lg-4">

  {/* LEFT LARGE CARD */}
  <div className="col-12 col-lg-6">
    {collectionData[0] && (
      <Subcollection
        category={collectionData[0].category}
        title={collectionData[0].title}
        description={collectionData[0].description}
        image={collectionData[0].image}
        link={collectionData[0].link}
        buttonText={collectionData[0].buttonText}
      />
    )}
  </div>

  {/* RIGHT TWO CARDS */}
  <div className="col-12 col-lg-6 d-flex flex-column gap-3 gap-lg-4">

    {collectionData.slice(1, 3).map((card) => (
      <Subcollection
        key={card.id}
        category={card.category}
        title={card.title}
        description={card.description}
        image={card.image}
        link={card.link}
        buttonText={card.buttonText}
      />
    ))}

  </div>

</div>

    </section>
  );
};

export default Editorialcollection;
