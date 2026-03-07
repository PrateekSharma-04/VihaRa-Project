const StoryCard = ({ image, category, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category */}
        <span className="text-xs font-semibold tracking-wide uppercase bg-[#E6E2D8] text-[#1F3D34] px-3 py-1 rounded-full w-fit mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#1F3D34] mb-3 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Read More Button */}
        <button className="mt-6 flex items-center text-[#1F3D34] font-medium cursor-pointer transition-colors duration-300 hover:text-[#2f5f52] group">
          Read More
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
