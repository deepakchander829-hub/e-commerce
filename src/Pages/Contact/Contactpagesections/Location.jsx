






const Location = () => {
    return (
        <>
        <section className="pb-20" aria-label="Store location">
    <div className="container">
        <div className="rounded-3xl overflow-hidden border border-[#E7E6F6] bg-white">

            {/* Map image with overlays */}
            <div className="position-relative bg-[#DCDAF5]">
                <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
                    className="w-100 h-80 md:h-[28rem] object-cover"
                    alt="Aerial view of New Delhi showing the Vibecraft customer support location"
                    loading="lazy"
                />

                {/* Location label chip */}
                <span className="position-absolute top-0 start-0 m-3 bg-[#17178F]/90 text-white text-xs font-semibold tracking-widest rounded-pill px-3 py-1">
                    OUR LOCATION
                </span>

                {/* Centered map pin */}
                <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">

                    <span className="bg-[#C0BFF9] text-[#17178F] text-xs font-semibold tracking-widest rounded-pill px-3 py-1 mb-2">
                        NEW DELHI
                    </span>

                    <div className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow w-11 h-11">
                        <i
                            className="bi bi-geo-alt-fill text-[#17178F]"
                            aria-hidden="true"
                        ></i>
                    </div>

                </div>
            </div>

            {/* Info bar below the map */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-4 py-3 bg-[#F8F8FC] border-top border-[#E7E6F6]">

                <span className="d-inline-flex align-items-center gap-2 font-semibold text-[#17178F] text-lg">
                    <span className="d-inline-flex align-items-center justify-content-center rounded-lg bg-white border border-[#E7E6F6] text-[#17178F] w-8 h-8">
                        <i
                            className="bi bi-shop"
                            aria-hidden="true"
                        ></i>
                    </span>

                    Visit VibeCraft
                </span>

                <span className="text-[#777777] d-inline-flex align-items-center gap-2">
                    <i
                        className="bi bi-geo-alt text-[#17178F]"
                        aria-hidden="true"
                    ></i>

                    New Delhi, India
                </span>

            </div>
        </div>
    </div>
</section>

        </>
    );
};

export default Location;    