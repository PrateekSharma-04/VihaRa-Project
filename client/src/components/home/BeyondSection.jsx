import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gadaGushaini from "../../assets/images/gada-gushaini.jpg";
import churahValley from "../../assets/images/churah-valley.jpg";
import komicVillage from "../../assets/images/komic-village.jpg";
import rajgundhaValley from "../../assets/images/rajgundha-valley.jpg";
import kotkhaiVillage from "../../assets/images/kotkhai-village.jpg";

const villages = [
  {
    image: gadaGushaini,
    title: "Gada Gushaini",
    location: "Banjar Valley, Kullu",
    description:
      "A peaceful Himalayan village surrounded by forests and rivers, offering a serene rural escape in Banjar Valley.",
  },
  {
    image: churahValley,
    title: "Churah Valley",
    location: "Chamba District",
    description:
      "A remote Himalayan valley known for terraced fields, traditional villages, and breathtaking mountain scenery.",
  },
  {
    image: komicVillage,
    title: "Komic Village",
    location: "Spiti Valley",
    description:
      "One of the highest motorable villages in the world, featuring ancient monasteries and vast Himalayan landscapes.",
  },
  {
    image: rajgundhaValley,
    title: "Rajgundha Valley",
    location: "Kangra District",
    description:
      "A hidden Himalayan valley with lush meadows and peaceful villages near the famous paragliding hub of Bir Billing.",
  },
  {
    image: kotkhaiVillage,
    title: "Kotkhai",
    location: "Shimla District",
    description:
      "A charming apple-growing region with scenic Himalayan views and traditional village life.",
  },
];

const BeyondSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === villages.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? villages.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-[#F5F2EC] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          Hidden Villages of Himachal
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#1F3D34] mt-4">
          BEYOND THE OBVIOUS
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center h-[550px]">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-10 z-40 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-10 z-40 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <ChevronRight size={22} />
        </button>

        {villages.map((item, index) => {
          // Circular offset logic
          let offset = index - current;

          if (offset < -2) offset += villages.length;
          if (offset > 2) offset -= villages.length;

          let positionClass = "";

          if (offset === 0) {
            // CENTER CARD
            positionClass =
              "translate-x-0 scale-100 opacity-100 z-30 shadow-2xl";
          } else if (offset === -1) {
            // LEFT CARD
            positionClass =
              "-translate-x-[240px] scale-90 opacity-60 z-20";
          } else if (offset === 1) {
            // RIGHT CARD
            positionClass =
              "translate-x-[240px] scale-90 opacity-60 z-20";
          } else {
            // HIDDEN CARDS
            positionClass = "opacity-0 scale-75 z-0";
          }

          return (
            <div
              key={index}
              className={`absolute w-[460px] h-[520px] rounded-3xl overflow-hidden transition-all duration-700 ease-in-out ${positionClass}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-8 left-6 text-white">
                <div className="bg-black/40 backdrop-blur px-4 py-1 rounded-full text-xs mb-4 inline-block">
                  📍 {item.location}
                </div>

                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-sm opacity-90 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 gap-2">
        {villages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#1F3D34]"
                : "w-3 bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default BeyondSection;