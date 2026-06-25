import { TrendingUp, Users } from "lucide-react";
import PageBanner from "../../Components/PageBanner";

const VisionMission = () => {
  return (
    <>
      <PageBanner title="Vision, Mission & Strategic Objectives" />

      <section className="bg-white py-14">
        <div className="max-w-[1170px] mx-auto px-4">
          <p className="text-[#8b0000] tracking-[6px] font-bold mb-6">
            Ministry of Mining, Blue Economy & Maritime Affairs
          </p>

          <div className="w-20 h-[2px] bg-[#8b0000] mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex gap-6 mb-28">
                <TrendingUp size={48} />
                <div>
                  <h3 className="text-xl font-bold mb-6">Vision</h3>
                  <p className="text-blue-600 leading-8">
                    A vibrant mining sector contributing to broad based growth
                    for socio-economic transformation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Users size={48} />
                <div>
                  <h3 className="text-xl font-bold mb-6">Mission</h3>
                  <p className="text-blue-600 leading-8">
                    To maximize benefits accruing from mineral resources value
                    chains for socio-economic development in a sustainable
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#8b0000] mb-5">
                Objectives
              </h2>
              <p className="text-blue-600 font-bold">To be updated!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;