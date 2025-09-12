
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-8">
          {/* Logo & Tagline */}
          <div>
            <div className="text-teal-500 mb-4">
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z" />
              </svg>
            </div>
            <p className="text-gray-700 font-semibold">
              Explore. Dream. Discover with TravelExplore ✨
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-6 lg:mt-0 lg:flex-1 lg:max-w-sm">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="you@travel.com"
                className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button className="rounded-md bg-teal-500 px-5 py-2 text-sm font-bold text-white hover:bg-teal-600 transition">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-400">
              Magical travel tips, straight to your inbox ✈️
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold mb-2 text-gray-900">Destinations</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Asia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Europe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Americas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Africa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2 text-gray-900">Company</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2 text-gray-900">Help</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2 text-gray-900">Legal</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center border-t border-gray-100 pt-6 text-gray-500 text-xs">
          <p>&copy; 2025 TravelExplore. All rights reserved.</p>
          <div className="flex mt-4 sm:mt-0 gap-4">
            <a href="#" className="hover:text-teal-500 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-teal-500 transition">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
