import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import miningImg from "../assets/mining-function.jpg";
import blueImg from "../assets/blue-economy.jpg";
import maritimeImg from "../assets/maritime.jpg";

const functions = [
  {
    title: "Mining Function",
    text: "This function is charged under section 17(1)(a) of the Mining Act, 2016, to among others promote",
    image: miningImg,
    path: "/functions/mining-function",
  },
  {
    title: "Blue Economy and Fisheries Function",
    text: "The state Department comprise of:",
    image: blueImg,
    path: "/functions/blue-economy-fisheries",
  },
  {
    title: "Maritime Affairs Function",
    text: "Formulation of shipping and maritime policies and legislation so as to ensure: Safety of life and",
    image: maritimeImg,
    path: "/functions/maritime-affairs",
  },
];

const KeyFunctions = () => {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12">
        <p className="text-[#8b0000] tracking-[6px] font-bold text-sm mb-2">
          State Department for Mining
        </p>

        <h2 className="text-2xl font-bold text-[#8b0000]">Key Functions</h2>

        <div className="w-20 h-[2px] bg-[#8b0000] mx-auto mt-5"></div>
      </div>

      <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {functions.map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <Link to={item.path}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover"
              />
            </Link>

            <div className="p-5">
              <Link
                to={item.path}
                className="text-[#d4a900] text-xl font-bold hover:text-[#8b0000]"
              >
                {item.title}
              </Link>

              <p className="text-blue-600 leading-7 mt-4 font-medium">
                {item.text}
              </p>

              <Link
                to={item.path}
                className="inline-flex items-center gap-1 mt-6 text-[#5c1b0b] hover:text-[#d4a900]"
              >
                Read More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFunctions;