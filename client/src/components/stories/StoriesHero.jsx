import heroImage from "../../assets/Images/stories-hero.jpg";

const StoriesHero = () => {
  return (
    <section className="relative h-[85vh] w-full">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Stories from Himachal"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 w-full">

          <div className="max-w-[600px] text-white">

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Stories from <br /> Himachal
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Real journeys. Hidden villages. Mountain experiences.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default StoriesHero;