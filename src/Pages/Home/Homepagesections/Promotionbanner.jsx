const promoBanners = [
  {
    id: 1,
    badge: "LIMITED TIME",
    title: "Mega Fashion Sale",
    offer: "UP TO 60% OFF",
    description: "Refresh your wardrobe with trending styles at unbeatable prices.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Now",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 2,
    badge: "NEW SEASON",
    title: "Fresh Styles Are Here",
    offer: "FLAT 40% OFF",
    description: "Discover the latest collection made for the new season.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Collection",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 3,
    badge: "DENIM DAYS",
    title: "Denim Collection",
    offer: "UP TO 50% OFF",
    description: "Upgrade your everyday wardrobe with timeless denim styles.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Denim",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 4,
    badge: "FOOTWEAR SALE",
    title: "Step Into Style",
    offer: "STARTING ₹999",
    description: "Find your next favourite pair from our latest footwear collection.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Footwear",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 5,
    badge: "WEEKEND OFFER",
    title: "Weekend Style Edit",
    offer: "EXTRA 20% OFF",
    description: "Give your weekend wardrobe a fresh and effortless upgrade.",
    image:
      "https://images.unsplash.com/photo-1490481651871-68abde25d43d?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Weekend",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 6,
    badge: "WOMEN'S EDIT",
    title: "Fashion For Her",
    offer: "UP TO 55% OFF",
    description: "Explore elegant dresses, tops and everyday styles for women.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Women",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 7,
    badge: "MEN'S EDIT",
    title: "Modern Men's Style",
    offer: "FLAT 50% OFF",
    description: "Upgrade your wardrobe with versatile styles for every occasion.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Men",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 8,
    badge: "ACCESSORIES",
    title: "Complete Your Look",
    offer: "UP TO 45% OFF",
    description: "Discover bags, watches and accessories to finish your look.",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Accessories",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 9,
    badge: "SUMMER SALE",
    title: "Summer Essentials",
    offer: "FROM ₹499",
    description: "Lightweight and fresh styles made for sunny days.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Summer",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 10,
    badge: "TIMELESS STYLE",
    title: "Watch Collection",
    offer: "UP TO 40% OFF",
    description: "Make every moment count with timeless watches.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Watches",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 11,
    badge: "BAG SALE",
    title: "Carry It In Style",
    offer: "FLAT 35% OFF",
    description: "From everyday totes to statement bags, find your perfect match.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Bags",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 12,
    badge: "EVERYDAY ESSENTIALS",
    title: "T-Shirt Festival",
    offer: "STARTING ₹399",
    description: "Stock up on comfortable T-shirts for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop T-Shirts",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 13,
    badge: "DRESS SALE",
    title: "Elegant Dress Collection",
    offer: "UP TO 60% OFF",
    description: "Find beautiful silhouettes for parties and special occasions.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Dresses",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 14,
    badge: "JACKET SEASON",
    title: "Layer Up In Style",
    offer: "UP TO 50% OFF",
    description: "Discover stylish jackets perfect for effortless layering.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Jackets",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 15,
    badge: "STREETWEAR DROP",
    title: "Urban Streetwear",
    offer: "FLAT 40% OFF",
    description: "Bold oversized fits inspired by modern city culture.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Streetwear",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 16,
    badge: "PARTY EDIT",
    title: "Party Ready",
    offer: "UP TO 55% OFF",
    description: "Stand out with statement styles made for unforgettable nights.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Party Edit",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 17,
    badge: "MINIMAL EDIT",
    title: "Less Is More",
    offer: "FLAT 30% OFF",
    description: "Clean silhouettes and timeless colours for modern wardrobes.",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Explore Minimal",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 18,
    badge: "PREMIUM COLLECTION",
    title: "The Premium Edit",
    offer: "UP TO 35% OFF",
    description: "Elevated fabrics and sophisticated details for a refined look.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Premium",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 19,
    badge: "JUST DROPPED",
    title: "New Arrivals",
    offer: "FRESH STYLES",
    description: "Be the first to discover the newest additions to our collection.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    buttonText: "View New Arrivals",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 20,
    badge: "SNEAKER FEST",
    title: "Sneaker Season",
    offer: "UP TO 45% OFF",
    description: "Step into comfort with the latest sneaker styles.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Sneakers",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 21,
    badge: "JEWELLERY EDIT",
    title: "Add A Little Sparkle",
    offer: "UP TO 40% OFF",
    description: "Elegant jewellery pieces to complete every outfit.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Jewellery",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 22,
    badge: "SUMMER SHADES",
    title: "Sunglasses Sale",
    offer: "STARTING ₹699",
    description: "Find your perfect pair of shades for every sunny day.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Sunglasses",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 23,
    badge: "ACTIVE EDIT",
    title: "Move In Comfort",
    offer: "UP TO 50% OFF",
    description: "Performance styles designed for workouts and everyday movement.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Activewear",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 24,
    badge: "CASUAL EDIT",
    title: "Casual Classics",
    offer: "FLAT 45% OFF",
    description: "Easy everyday pieces that belong in every wardrobe.",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Casual",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 25,
    badge: "FORMAL EDIT",
    title: "Dress To Impress",
    offer: "UP TO 50% OFF",
    description: "Sharp and sophisticated looks for work and special occasions.",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Formal",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 26,
    badge: "WINTER SALE",
    title: "Cozy Winter Edit",
    offer: "UP TO 60% OFF",
    description: "Stay warm and stylish with our winter collection.",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Winter",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 27,
    badge: "BEAUTY SALE",
    title: "Beauty Essentials",
    offer: "FLAT 30% OFF",
    description: "Refresh your beauty routine with everyday favourites.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Beauty",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 28,
    badge: "FLASH DEAL",
    title: "Limited Time Offer",
    offer: "EXTRA 25% OFF",
    description: "Grab your favourite styles before this special offer ends.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Grab The Deal",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 29,
    badge: "SMART SAVINGS",
    title: "Buy More, Save More",
    offer: "BUY 2 GET EXTRA 20% OFF",
    description: "Mix and match your favourite styles and unlock extra savings.",
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Start Shopping",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
  {
    id: 30,
    badge: "FINAL SALE",
    title: "Last Chance Deals",
    offer: "UP TO 70% OFF",
    description: "Final opportunity to grab selected styles at special prices.",
    image:
      "https://images.unsplash.com/photo-1490481651871-68abde25d43d?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Final Sale",
    buttonLink: "shop.html",
    buttonStyle: "primary",
  },
];

const Promotionbanner = () => {
  return (
    <div
      className="d-flex flex-nowrap overflow-auto gap-3 p-2 pb-2"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {promoBanners.map((banner) => (
        <div
          key={banner.id}
          className="flex-shrink-0"
          style={{
            width: "500px",
            maxWidth: "calc(100vw - 16px)",
          }}
        >
          <div
            className="position-relative overflow-hidden "
            style={{
              width: "100%",
              height: "300px",
            }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promotionbanner;
