import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import malana from "../../assets/images/malana-village.jpg";
import kalpa from "../../assets/images/kalpa-kinnaur.jpg";
import jibhi from "../../assets/images/jibhi-tirthan.jpg";
import nako from "../../assets/images/nako-village.jpg";
import thanedar from "../../assets/images/thanedar-valley.jpg";

const slides = [
  {
    image: malana,
    title: "Malana Village",
    description:
      "An ancient Himalayan village in Parvati Valley known for its unique traditions, wooden architecture, and one of the oldest self-governed communities in the world.",
  },
  {
    image: kalpa,
    title: "Kalpa, Kinnaur",
    description:
      "A scenic mountain village famous for its apple orchards and breathtaking views of the sacred Kinner Kailash range, offering a deep glimpse into traditional Kinnauri culture.",
  },
  {
    image: jibhi,
    title: "Jibhi Village",
    description:
      "A hidden Himalayan village surrounded by pine forests, wooden cottages, and waterfalls, perfect for experiencing the peaceful rhythm of rural Himachali life.",
  },
  {
    image: nako,
    title: "Nako Village",
    description:
      "A beautiful high-altitude Himalayan village centered around the serene Nako Lake, featuring ancient monasteries and traditional mud-brick houses.",
  },
  {
    image: thanedar,
    title: "Thanedar Valley",
    description:
      "A quiet apple-growing region in the Shimla hills known for lush orchards, heritage villages, and panoramic views of the Himalayan mountains.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-16 xl:px-24 text-white">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl opacity-90">
                  {slide.description}
                </p>

                <button className="mt-8 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator (Bottom Left) */}
      <div className="absolute bottom-8 left-8 md:left-16 xl:left-24 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Arrow Controls (Bottom Right) */}
      <div className="absolute bottom-8 right-8 md:right-16 xl:right-24 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </section>
  );
};

export default Hero;