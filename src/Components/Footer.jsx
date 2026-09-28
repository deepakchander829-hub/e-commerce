const Footer = () => {
  return (
    <footer className="bg-[#39378f] text-white p-3 sm:px-8 lg:px-16 py-12">

      <div className="max-w-7xl mx-auto">

        {/* ================= FOOTER CONTENT ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4  gap-y-10">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">

            <h2 className="text-2xl font-bold mb-4">
              VibeCraft
            </h2>

            <p className="text-white/65 leading-6 max-w-[280px]">
              Premium essentials for everyday life.
              Curated with care, delivered with confidence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">

              <a
                href="#"
                className="  nav-link  w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <i className=    "  !text-light bi bi-facebook text-lg"></i>
              </a>

              <a
                href="#"
                className="  nav-link  w  -9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <i className=  "  !text-light bi bi-instagram text-lg"></i>
              </a>

              <a
                href="#"
                className="  nav-link  w  -9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <i className=  "  !text-light bi bi-twitter-x text-lg"></i>
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h6 className="text-base sm:text-lg font-bold mb-4">
              Quick Links
            </h6>

            <ul className="list-none p-0 m-0 space-y-3 text-sm sm:text-base text-white/65">

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Shop
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* CUSTOMER SERVICE */}
          <div>

            <h6 className="   md:text-base font-bold mb-4">
              Customer Service
            </h6>

            <ul className="list-none p-0 m-0 space-y-3 text-sm sm:text-base text-white/65">

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Track Order
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white nav-link">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* CONTACT INFO */}
          <div className="col-span-2 md:col-span-1">

            <h3 className="text-base sm:text-lg font-bold mb-4">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-white/65">

              <p className="m-0 break-words">
                hello@vibecraft.com
              </p>

              <p className="m-0">
                +91 98765 43210
              </p>

              <p className="m-0 leading-6">
                12 Commerce Avenue, New Delhi
              </p>

            </div>

          </div>

        </div>


        {/* ================= NEWSLETTER ================= */}
        <div className="mt-12 border border-white/15 bg-white/5 rounded-2xl p-4 sm:p-6">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* NEWSLETTER TEXT */}
            <div>

              <h3 className="text-xl font-bold mb-1">
                Join our newsletter
              </h3>

              <p className="text-sm sm:text-base text-white/65 leading-6">
                Get early access to new drops, exclusive offers, and curated picks.
              </p>

            </div>


        {/* EMAIL FORM */}
<div className="flex w-full lg:w-auto gap-3">

<input
  type="email"
  placeholder="Enter your email"
  className="h-12 flex-1 min-w-0 w-full lg:flex-none lg:w-80 rounded-2 px-4 bg-white text-gray-700 outline-none"
/>
  <button
    type="button"
    className="h-12 w-15 !font-bold !text-[10px]  lg:w-32 shrink-0 rounded-2 bg-white text-gray-900 font-semibold whitespace-nowrap"
  >

  Subscribe
  </button>

</div>
          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/50">

          <p className="m-0">
            © 2026 VibeCraft. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="hover:text-white   nav-link"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white   nav-link"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;