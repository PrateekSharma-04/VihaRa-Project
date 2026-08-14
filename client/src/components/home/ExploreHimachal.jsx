import { useState } from "react";
import map from "../../assets/Images/himachal-map.png";
import aiva from "../../assets/Images/AiVa-guidence.png";

const regions = {
  "Western Himachal": ["kangra", "chamba"],
  "Central Himachal": ["kullu", "mandi"],
  "High Himalaya": ["kinnaur", "spiti"],
  "Lower Himachal": [
    "shimla",
    "solan",
    "sirmaur",
    "bilaspur",
    "hamirpur",
    "una",
  ],
};

const districts = {
  chamba: {
    name: "Chamba",
    desc: "Ancient temples, tribal culture, and Himalayan meadows.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
    pos: "top-[18%] left-[32%]",
  },
  kangra: {
    name: "Kangra",
    desc: "Tea gardens and monasteries around Dharamshala.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    pos: "top-[40%] left-[36%]",
  },
  kullu: {
    name: "Kullu",
    desc: "Valley of gods with rivers and forests.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    pos: "top-[55%] left-[38%]",
  },
  mandi: {
    name: "Mandi",
    desc: "Gateway to hidden Himalayan villages.",
    image: "https://images.unsplash.com/photo-1609942072337",
    pos: "top-[50%] left-[56%]",
  },
  kinnaur: {
    name: "Kinnaur",
    desc: "High-altitude villages, monasteries, and apple orchards.",
    image: "https://images.unsplash.com/photo-1597756205043",
    pos: "top-[34%] left-[70%]",
  },
  spiti: {
    name: "Lahaul & Spiti",
    desc: "Cold desert monasteries and dramatic landscapes.",
    image: "https://images.unsplash.com/photo-1604514628550",
    pos: "top-[16%] left-[55%]",
  },
  shimla: {
    name: "Shimla",
    desc: "Colonial charm in cedar forests.",
    image: "https://images.unsplash.com/photo-1605649487212",
    pos: "top-[64%] left-[66%]",
  },
  solan: {
    name: "Solan",
    desc: "Hills known for temples and orchards.",
    image: "https://images.unsplash.com/photo-1605640840605",
    pos: "top-[70%] left-[58%]",
  },
  sirmaur: {
    name: "Sirmaur",
    desc: "Peaceful Himalayan countryside.",
    image: "https://images.unsplash.com/photo-1609942072337",
    pos: "top-[80%] left-[66%]",
  },
  bilaspur: {
    name: "Bilaspur",
    desc: "Lake landscapes and hill settlements.",
    image: "https://images.unsplash.com/photo-1604514628550",
    pos: "top-[63%] left-[49%]",
  },
  hamirpur: {
    name: "Hamirpur",
    desc: "Cultural heartland of lower Himachal.",
    image: "https://images.unsplash.com/photo-1582719471384",
    pos: "top-[58%] left-[46%]",
  },
  una: {
    name: "Una",
    desc: "Gateway district near Punjab plains.",
    image: "https://images.unsplash.com/photo-1605649487212",
    pos: "top-[86%] left-[44%]",
  },
};

export default function ExploreHimachal() {
  const [activeRegion, setActiveRegion] = useState("Western Himachal");
  const [hovered, setHovered] = useState(null);

  const activeDistricts = regions[activeRegion];

  return (
    <section className="bg-[#F5F2EC] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-5xl font-serif text-[#1F3D34]">
              Explore Hidden Himachal
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Discover offbeat villages, serene valleys, hidden monasteries, and
              picturesque trails across Himachal Pradesh.
            </p>

            <p className="mt-6 font-semibold text-[#1F3D34]">
              Explore 150+ Hidden Places Across 12 Districts
            </p>

            {/* ZONE FILTERS */}
            <div className="flex flex-wrap gap-4 mt-8">
              {Object.keys(regions).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-6 py-3 rounded-full border transition
                    ${
                      activeRegion === region
                        ? "bg-[#1F3D34] text-white"
                        : "border-[#1F3D34] text-[#1F3D34]"
                    }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="relative bg-[#DDE3E1] rounded-3xl p-10 shadow-lg">
            <img src={map} className="w-full object-contain" />

            {Object.entries(districts).map(([key, d]) => {
              const active = activeDistricts.includes(key);

              return (
                <div
                  key={key}
                  className={`absolute ${d.pos}`}
                  onMouseEnter={() => active && setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition
                    ${
                      active
                        ? "bg-green-700 scale-125 cursor-pointer"
                        : "bg-gray-400 opacity-40"
                    }`}
                  />

                  {hovered === key && active && (
                    <div
                      className="absolute top-6 left-6 w-64 bg-white rounded-2xl shadow-xl overflow-hidden"
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <img src={d.image} className="h-36 w-full object-cover" />

                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-[#1F3D34]">
                          {d.name}
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">{d.desc}</p>

                        <button className="mt-3 bg-[#1F3D34] text-white px-4 py-2 rounded-full text-sm">
                          Explore →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* NOT SURE SECTION */}
        <div className="mt-20 bg-white rounded-3xl shadow-md p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* LEFT CONTENT */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <img src={aiva} className="w-20 sm:w-24" alt="AiVa Guide" />

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F3D34]">
                  Not sure where to start?
                </h3>

                <p className="text-gray-600 mt-2">
                  Let AiVa suggest a hidden village in Himachal.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-end">
              <button className="bg-[#1F3D34] text-white px-8 py-4 rounded-full hover:bg-[#2f5f52] transition">
                Discover with AiVa →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
