import logo from "../../assets/Images/Vihara main logo.png";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F2EC] pt-16 pb-10">

      {/* TOP DIVIDER */}
      <div className="border-t border-gray-300 mb-16"></div>

      {/* FOOTER CONTENT */}
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* BRAND */}
          <div>
            <img
              src={logo}
              alt="Vihara Logo"
              className="h-12 mb-6"
            />

            <p className="text-gray-600 leading-relaxed max-w-sm">
              Where India Unfolds. Discover lesser-known destinations with
              AI-powered guidance and sustainable travel practices.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F3D34] text-white hover:scale-105 transition cursor-pointer">
                <Instagram size={18} />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F3D34] text-white hover:scale-105 transition cursor-pointer">
                <Twitter size={18} />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F3D34] text-white hover:scale-105 transition cursor-pointer">
                <Facebook size={18} />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1F3D34] text-white hover:scale-105 transition cursor-pointer">
                <Linkedin size={18} />
              </div>

            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-[#1F3D34] font-semibold mb-6 tracking-wide">
              EXPLORE
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-[#1F3D34] cursor-pointer">AI Guide</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Smart Map</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Destinations</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Stories</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-[#1F3D34] font-semibold mb-6 tracking-wide">
              ABOUT
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-[#1F3D34] cursor-pointer">Sustainability</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Rural Tourism</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Safety</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-[#1F3D34] font-semibold mb-6 tracking-wide">
              LEGAL
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="hover:text-[#1F3D34] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Terms of Service</li>
              <li className="hover:text-[#1F3D34] cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM DIVIDER */}
      <div className="border-t border-gray-300 mt-16 pt-6">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 text-center text-gray-500 text-sm">
          © 2026 VihaRa. All rights reserved. Made with care for responsible tourism.
        </div>
      </div>

    </footer>
  );
};

export default Footer;