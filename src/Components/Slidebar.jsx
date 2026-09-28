


const  Slidebar = () => {
    return (
       

           <section class="container pt-4 pt-lg-5" aria-label="Welcome to VibeCraft">
    <div class="row g-0 align-items-stretch bg-white border border-[#E7E6F6] rounded-2xl overflow-hidden">
        <div class="col-12 col-lg-6">
            <div class="h-100 d-flex flex-column justify-content-center p-4 md:p-6 bg-[#F8F8FC]">
                <p class="text-xs uppercase tracking-widest text-[#17178F] fw-semibold mb-2">
                    <i class="bi bi-lightning-charge-fill me-1" aria-hidden="true"></i>Welcome to VibeCraft
                </p>
                <h1 class="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#111111] mb-3">
                    Style Made For <span class="text-[#17178F]">Everyone.</span>
                </h1>
                <p class="text-[#777777] mb-4 max-w-md">Discover modern fashion, timeless essentials and everyday pieces curated for every style.</p>
                <div class="d-flex flex-wrap gap-2">
                    <a href="shop.html" class="btn bg-[#17178F] text-white border-0 rounded-xl font-semibold px-4 py-2">Shop Now</a>
                    <a href="category.html" class="btn bg-white border border-[#E7E6F6] text-[#17178F] rounded-xl font-semibold px-4 py-2">Explore Collections</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&h=1150&q=80" alt="Woman shopping with stylish bags at VibeCraft" class="w-100 h-64 md:h-80 lg:h-full object-cover" />
        </div>
    </div>
</section>
    );
};

export default Slidebar;    