import idea from "../../assets/Images/VihaRa-Idea.png";

const Purpose = () => {
  return (
    <section className="bg-[#F5F2EC] py-24">

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-serif text-[#1F3D34]">
          The Idea That Sparked VihaRa
        </h2>
      </div>

      {/* Card Container */}
      <div className="max-w-6xl mx-auto bg-[#F7F5F0] rounded-3xl shadow-sm px-12 py-16 flex flex-col lg:flex-row items-center gap-16">

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={idea}
            alt="Himachal village"
            className="w-[360px] h-[420px] object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">

          <h3 className="text-3xl md:text-4xl font-serif text-[#1F3D34] leading-snug">
            At VihaRa, we believe the future of travel lies in rediscovering the past.
          </h3>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Our mission is to connect travelers with Himachal's unexplored villages,
            regional cuisines, cultural craftsmanship, and heritage that often remain unseen.
          </p>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Powered by AiVa, our AI guide, we blend intelligent planning with immersive
            experiences to make tourism more sustainable, inclusive, and transformative.
            Through VihaRa, we aspire to build journeys that strengthen communities,
            preserve culture, and help travelers reconnect with the true spirit of the Himalayas!
          </p>

        </div>

      </div>

    </section>
  );
};

export default Purpose;