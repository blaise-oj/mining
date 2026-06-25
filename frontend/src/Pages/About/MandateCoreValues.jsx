import PageBanner from "../../Components/PageBanner";

const MandateCoreValues = () => {
  return (
    <>
      <PageBanner title="Mandate and Core Values" />

      <section className="bg-white py-14">
        <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#8b0000] tracking-[6px] font-bold mb-3">
              MIBEMA
            </p>

            <h1 className="text-4xl font-bold text-[#8b0000]">Mandate</h1>
            <div className="w-20 h-[2px] bg-[#8b0000] my-6"></div>

            <p className="text-blue-600 font-bold">To be updated!</p>
          </div>

          <div>
            <p className="text-[#8b0000] tracking-[6px] font-bold mb-3">
              MIBEMA
            </p>

            <h1 className="text-4xl font-bold text-[#8b0000]">Core Values</h1>
            <div className="w-20 h-[2px] bg-[#8b0000] my-6"></div>

            <div className="text-blue-600 leading-8">
              <p>
                The State Department is guided by and strive to uphold the
                following core values which are expressed in the catch phrase
                PETITE.
              </p>

              <p className="mt-6">The core values are:-</p>

              <div className="mt-6">
                <p><b>P</b> - Professionalism</p>
                <p><b>E</b> - Efficiency</p>
                <p><b>T</b> - Teamwork</p>
                <p><b>I</b> - Innovation and Creativity</p>
                <p><b>T</b> - Transparency, Integrity and Accountability;</p>
                <p><b>E</b> - Effective Governance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MandateCoreValues;