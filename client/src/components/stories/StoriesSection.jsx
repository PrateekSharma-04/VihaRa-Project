import StoryCard from "../ui/StoryCard";

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32",
    category: "Architecture",
    title: "The Timeless Craft of Himachali Wood Architecture",
    description:
      "Exploring the ancient tradition of kath-kuni architecture — earthquake-resistant wooden homes that have stood the test of time.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1589802829985-817e51171b92",
    category: "Spiritual",
    title: "Life in Spiti Monasteries",
    description:
      "A journey through the serene and spiritual landscapes of Spiti Valley, where ancient Buddhist monasteries define life.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    category: "Culture",
    title: "Apple Orchards of Kinnaur",
    description:
      "Discovering the rich apple farming culture in Kinnaur, where generations of families cultivate the finest orchards.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576485375217-d6a95e34d043",
    category: "Culture",
    title: "Village Festivals of Himachal",
    description:
      "Experiencing vibrant local fairs and festivals that bring Himachali villages alive with music and rituals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7",
    category: "Cuisine",
    title: "Traditional Himachali Cuisine",
    description:
      "Savoring authentic mountain flavors — from Siddu and Madra to Chha Gosht passed down through generations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985",
    category: "Craft",
    title: "Wool Weaving and Handicrafts",
    description:
      "Meeting artisans who preserve Himachal's centuries-old weaving traditions in remote Himalayan villages.",
  },
];

const StoriesSection = () => {
  return (
    <section className="bg-[#F5F2EC] py-24">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {stories.map((story, index) => (
            <StoryCard
              key={index}
              image={story.image}
              category={story.category}
              title={story.title}
              description={story.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default StoriesSection;