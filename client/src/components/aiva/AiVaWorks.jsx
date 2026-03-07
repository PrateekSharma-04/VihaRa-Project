import { Compass, MapPin, Map, Shield } from "lucide-react";

export default function AiVaWorks() {
  const features = [
    {
      icon: <Compass size={26} />,
      title: "Smart Itinerary Builder",
      description:
        "Builds journeys based on your interests and travel style.",
    },
    {
      icon: <MapPin size={26} />,
      title: "Rural Discovery Engine",
      description:
        "Finds lesser-known villages and hidden heritage.",
    },
    {
      icon: <Map size={26} />,
      title: "Smart Map Navigator",
      description:
        "Goes beyond maps with curated local insights.",
    },
    {
      icon: <Shield size={26} />,
      title: "Safety & SOS Assist",
      description:
        "Real-time alerts and emergency support.",
    },
  ];

  return (
    <section className="bg-[#F5F2EC] py-28">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <h2 className="text-center text-5xl font-serif text-[#1F3D34] mb-16">
          How AiVa Travels With You
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#E9E5DE] rounded-2xl p-8 shadow-sm"
            >
              
              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm text-[#1F3D34] mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1F3D34] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}