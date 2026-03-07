import "./aivaHero.scss";

export default function AiVaHero() {
  return (
    <section className="bg-[#F5F2EC] min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-7xl font-serif text-[#1F3D34]">AiVa</h1>

          <h2 className="mt-4 text-3xl font-serif text-[#1F3D34]">
            Where Intelligence Meets Exploration
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Your intelligent travel companion for discovering the unseen,
            planning smarter journeys, and navigating India with confidence.
          </p>

          <p className="mt-6 text-gray-600 flex items-center gap-2">
            ✨ Make AiVa truly yours. You can rename your guide anytime.
          </p>

          <div className="flex gap-6 mt-8">
            <button className="bg-[#1F3D34] text-white px-8 py-4 rounded-xl hover:scale-105 transition">
              Start with AiVa
            </button>

            <button
              onClick={() => {
                const section = document.getElementById("rename-guide");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition"
            >
              Rename Your Guide
            </button>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Wave Rings */}
          <div className="aiva-wave wave1"></div>
          <div className="aiva-wave wave2"></div>
          <div className="aiva-wave wave3"></div>

          {/* Center Circle */}
          <div className="aiva-core" aria-label="AiVa AI assistant">
            AiVa
          </div>

          {/* Floating Dots */}
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
          <div className="dot dot5"></div>
        </div>
      </div>
    </section>
  );
}
