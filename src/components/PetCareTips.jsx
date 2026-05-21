import { FaCheckCircle, FaUtensils, FaStethoscope, FaFutbol, FaBroom, FaHeart, FaTooth, FaSyringe } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

const PetCareTips = () => {
  const tips = [
    { icon: <FaUtensils />, text: "Provide clean water and healthy food daily", color: "text-green-500" },
    { icon: <FaStethoscope />, text: "Take your pet for regular vet checkups", color: "text-blue-500" },
    { icon: <FaFutbol />, text: "Give them enough exercise and playtime", color: "text-orange-500" },
    { icon: <FaBroom />, text: "Keep their environment clean and safe", color: "text-purple-500" },
    { icon: <FaTooth />, text: "Brush their teeth regularly", color: "text-pink-500" },
    { icon: <FaSyringe />, text: "Keep vaccinations up to date", color: "text-red-500" }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <GiHealthNormal className="text-5xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pet Care Tips
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Simple yet essential tips to keep your furry friend healthy and happy
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
              >
                <div className={`${tip.color} text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <FaCheckCircle />
                </div>
                <div className={`${tip.color} text-xl`}>
                  {tip.icon}
                </div>
                <p className="text-gray-700 flex-1">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center">
          <FaHeart className="text-red-500 animate-pulse" />
          <p className="text-sm text-gray-500">Love them like family, care for them like royalty</p>
          <FaHeart className="text-red-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;