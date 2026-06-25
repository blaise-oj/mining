import { TrendingUp, Headphones } from "lucide-react";
import rigImage from "../assets/rig.jpg";

const DepartmentSection = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        <div className="px-10 md:px-20 lg:px-24 py-20">
          <h2 className="text-[26px] font-bold text-[#8b0000]">
            State Department for Mining
          </h2>

          <div className="w-20 h-[2px] bg-[#8b0000] mt-5 mb-8"></div>

          <div className="flex gap-6 mb-14">
            <div className="text-purple-500 pt-2">
              <TrendingUp size={48} strokeWidth={2} />
            </div>

            <div className="border-l border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-black mb-2">Vision</h3>
              <p className="text-blue-600 font-bold leading-7">
                A vibrant mining sector contributing to broad based growth for
                socio-economic transformation.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-orange-400 pt-2">
              <Headphones size={48} strokeWidth={2} />
            </div>

            <div className="border-l border-gray-200 pl-5">
              <h3 className="text-xl font-bold text-black mb-2">Mission</h3>
              <p className="text-blue-600 font-bold leading-7">
                To maximize benefits accruing from mineral resources value chains
                for socio-economic development in a sustainable environment.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[520px]">
          <img
            src={rigImage}
            alt="State Department for Mining"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;