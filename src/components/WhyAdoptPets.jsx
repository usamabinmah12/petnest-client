import { FaHome, FaHeart, FaHandshake, FaSmile, FaDumbbell } from "react-icons/fa";
import { MdPets, MdHealthAndSafety, MdEmojiEmotions } from "react-icons/md";

const WhyAdoptPets = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            <MdPets className="text-lg" />
            Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Adopt Pets?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Adopting a pet saves a life and gives a homeless animal a loving home.
            It's not just about getting a pet — it's about gaining a loyal friend,
            emotional support, and unconditional love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
              <FaHome className="text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Give a Home</h3>
            <p className="text-gray-500 text-sm">Provide shelter to pets in need</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
              <FaHeart className="text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Save a Life</h3>
            <p className="text-gray-500 text-sm">Rescue homeless animals</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
              <FaHandshake className="text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Loyal Friend</h3>
            <p className="text-gray-500 text-sm">Gain a faithful companion</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <FaSmile className="text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Happiness</h3>
            <p className="text-gray-500 text-sm">Bring joy to your life</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <MdPets className="text-5xl mx-auto mb-4" />
          <p className="text-xl font-semibold">
            "Adopting a pet changed my life. Best decision ever!"
          </p>
          <p className="text-green-100 mt-2">- Happy Adopter</p>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptPets;