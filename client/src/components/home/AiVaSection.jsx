import aiVaImage from "../../assets/Images/AiVa-guidence.png";
import { CheckCircle, MapPin, Compass } from "lucide-react";

const AiVaSection = () => {
  return (
    <section className="bg-[#F5F2EC] py-24">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="max-w-xl">
          <span className="inline-block bg-gray-200 text-xs tracking-widest uppercase px-4 py-2 rounded-full text-gray-600 mb-6">
            AI-Powered Exploration
          </span>

          <h2 className="text-5xl md:text-6xl font-serif text-[#1F3D34] leading-tight">
            Meet AiVa
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            A travel companion designed to help you uncover Himachal's hidden villages your way.
          </p>

          <button className="mt-8 bg-[#1F3D34] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#163028] transition duration-300">
            Explore with AiVa →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={aiVaImage}
            alt="AiVa Guidance"
            className="w-[500px] md:w-[600px] object-contain"
          />
        </div>

      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
            <CheckCircle className="text-[#1F3D34]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-[#1F3D34] mb-4">
            Understands Your Preferences
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Tell AiVa what you love — nature, culture, offbeat villages — and it builds your Himachal journey.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
            <MapPin className="text-[#1F3D34]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-[#1F3D34] mb-4">
            Finds Hidden Himalayan Gems
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Not just popular spots. Real stories. Real Himachali villages.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
            <Compass className="text-[#1F3D34]" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-[#1F3D34] mb-4">
            Supports You On the Go
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Instant suggestions, safety tips, and local Himachali cultural insights.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AiVaSection;