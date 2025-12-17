import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 border border-yellow-400 rounded-sm" />
              <h2 className="text-white text-lg font-semibold">
                StayScape
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Curating extraordinary experiences for the discerning traveler.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-playfair text-lg mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/about" className="hover:text-white transition">About Us</NavLink></li>
              <li><NavLink to="#" className="hover:text-white transition">Careers</NavLink></li>
              <li><NavLink to="#" className="hover:text-white transition">Press</NavLink></li>
              <li><NavLink to="#" className="hover:text-white transition">Blog</NavLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-playfair text-lg mb-5">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="#" className="hover:text-white transition">Help Center</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition">Contact Us</NavLink></li>
              <li><NavLink to="#" className="hover:text-white transition">Privacy Policy</NavLink></li>
              <li><NavLink to="#" className="hover:text-white transition">Terms of Service</NavLink></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-playfair text-lg mb-5">
              Destinations
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">Paris</li>
              <li className="hover:text-white transition cursor-pointer">Dubai</li>
              <li className="hover:text-white transition cursor-pointer">Maldives</li>
              <li className="hover:text-white transition cursor-pointer">New York</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2025 StayScape. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
