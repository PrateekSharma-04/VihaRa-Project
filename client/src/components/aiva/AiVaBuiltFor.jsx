import { Check } from "lucide-react";

export default function AiVaBuiltFor() {
  const features = [
    "AI-powered destination insights",
    "Sustainable route suggestions",
    "Women-safe travel recommendations",
    "GI-tag and rural experience integration",
  ];

  return (
    <section className="bg-[#F5F2EC] py-28">

      <div className="max-w-6xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <h2 className="text-center text-5xl font-serif text-[#1F3D34] mb-16">
          Built for Intelligent Travel
        </h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#E9E5DE] rounded-2xl px-8 py-6 flex items-center gap-5"
            >
              
              {/* Check Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2F6F6A] text-white">
                <Check size={20} />
              </div>

              {/* Text */}
              <p className="text-lg text-[#1F3D34]">
                {feature}
              </p>

            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#E57A1F] text-white px-10 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition">
            Start Your Journey with AiVa
          </button>
        </div>

      </div>

    </section>
  );
}