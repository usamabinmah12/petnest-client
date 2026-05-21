import { FaDog, FaCat, FaHeart, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const SuccessStories = () => {
  const stories = [
    {
      icon: <FaDog className="text-3xl" />,
      story: "After adopting Bruno, my life changed completely. He became my best friend.",
      name: "Bruno's Dad",
      color: "text-orange-500"
    },
    {
      icon: <FaCat className="text-3xl" />,
      story: "Luna was rescued from the streets. Now she's part of our family.",
      name: "Luna's Mom",
      color: "text-purple-500"
    },
    {
      icon: <MdPets className="text-3xl" />,
      story: "Adoption is the best decision I've ever made. So much love and joy!",
      name: "Happy Adopter",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className={`${story.color} mb-4 flex justify-center`}>
                {story.icon}
              </div>
              <FaQuoteLeft className="text-gray-300 text-xl mx-auto mb-3" />
              <p className="text-gray-600 italic mb-4">
                {story.story}
              </p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-3">
                — {story.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;