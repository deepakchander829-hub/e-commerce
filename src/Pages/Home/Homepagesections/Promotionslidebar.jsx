import React, { useEffect, useRef, useState } from "react";

const promotions = [
    {
        badge: "Featured",
        icon: "bi-collection",
        title: "The New Season Edit",
        description:
            "Fresh silhouettes, refined essentials and modern pieces designed for everyday style.",
        image:
            "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Explore Collection",
    },
    {
        badge: "Trending",
        icon: "bi-fire",
        title: "Trending Styles",
        description:
            "Discover the latest fashion trends and statement pieces made to elevate your everyday look.",
        image:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Shop Trending",
    },
    {
        badge: "New Arrival",
        icon: "bi-stars",
        title: "Fresh Arrivals",
        description:
            "Meet the newest additions to our collection, carefully selected for modern wardrobes.",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "View New Arrivals",
    },
    {
        badge: "Best Sellers",
        icon: "bi-heart",
        title: "Customer Favorites",
        description:
            "Shop the styles our customers love most, from everyday essentials to standout pieces.",
        image:
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Shop Best Sellers",
    },
    {
        badge: "Special Offer",
        icon: "bi-tag",
        title: "Style Sale",
        description:
            "Refresh your wardrobe with amazing styles and special prices available for a limited time.",
        image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Shop Sale",
    },
    {
        badge: "For Him",
        icon: "bi-person",
        title: "Men's Essentials",
        description:
            "Upgrade his wardrobe with timeless essentials, smart casual styles and everyday favorites.",
        image:
            "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Shop Men's",
    },
    {
        badge: "For Her",
        icon: "bi-person-heart",
        title: "Women's Collection",
        description:
            "Explore elegant dresses, versatile separates and contemporary styles designed for her.",
        image:
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Shop Women's",
    },
    {
        badge: "Accessories",
        icon: "bi-bag-heart",
        title: "Complete Your Look",
        description:
            "Find the perfect finishing touches with stylish bags, watches, jewellery and accessories.",
        image:
            "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Shop Accessories",
    },
    {
        badge: "Weekend Edit",
        icon: "bi-sun",
        title: "Weekend Ready",
        description:
            "Easygoing styles made for relaxed weekends, casual outings and unforgettable moments.",
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Explore Weekend",
    },
    {
        badge: "Limited Edition",
        icon: "bi-gem",
        title: "Exclusive Collection",
        description:
            "Discover limited-edition pieces created for those who love unique and standout fashion.",
        image:
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&h=900&q=80",
        buttonText: "Discover More",
    },
];

const PromotionSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === promotions.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? promotions.length - 1 : prev - 1
        );
    };

    // Touch Start
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    // Touch Move
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    // Touch End
    const handleTouchEnd = () => {
        const distance =
            touchStartX.current - touchEndX.current;

        // Minimum swipe distance
        if (Math.abs(distance) < 50) return;

        // Swipe Left → Next
        if (distance > 0) {
            nextSlide();
        }

        // Swipe Right → Previous
        if (distance < 0) {
            previousSlide();
        }
    };

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const promotion = promotions[currentSlide];

    return (
        <section className="w-full px-3 sm:px-4 lg:px-6 py-6">

            <div
                className="relative overflow-hidden rounded-2xl bg-[#F8F8FC] shadow-sm touch-pan-y select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >

                {/* Slider */}
                <div
                    key={currentSlide}
                    className="grid grid-cols-1 lg:grid-cols-7 min-h-[500px] lg:min-h-[450px] animate-fadeIn"
                >

                    {/* Image */}
                    <div className="lg:col-span-4 h-64 sm:h-80 lg:h-auto">
                        <img
                            src={promotion.image}
                            alt={promotion.title}
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 flex items-center bg-[#F8F8FC] p-6 sm:p-8 lg:p-10">

                        <div className="w-full">

                            {/* Badge */}
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#17178F] font-semibold mb-3">
                                <i
                                    className={`bi ${promotion.icon} me-1`}
                                    aria-hidden="true"
                                ></i>

                                {promotion.badge}
                            </p>

                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] leading-tight mb-3">
                                {promotion.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-[#777777] leading-relaxed mb-6 max-w-lg">
                                {promotion.description}
                            </p>

                            {/* Button */}
                            <a
                                href="/shop"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 bg-[#17178F] hover:bg-[#11116f] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                            >
                                {promotion.buttonText}

                                <i
                                    className="bi bi-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Previous Button */}
                <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous promotion"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#17178F] z-10"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next promotion"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#17178F] z-10"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {promotions.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-1.5 rounded-full transition-all ${
                                currentSlide === index
                                    ? "w-6 bg-[#17178F]"
                                    : "w-1.5 bg-white"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PromotionSlider;
