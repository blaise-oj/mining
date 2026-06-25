import PageBanner from "../../Components/PageBanner";

const PressRelease = () => {
  return (
    <>
      <PageBanner title="Press Release" />

      <section className="bg-white py-14">
        <div className="max-w-[1170px] mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#8b0000] uppercase leading-9 mb-4">
            Media Briefs On Status Of Reforms In The Kenyan Mining Sector
            Presented By:Hon. Salim Mvurya, EGH Cabinet Secretary For Mining,
            Blue Economy And Maritime Affairs 4th October, 2023
          </h1>

          <p className="text-blue-600 leading-8">
            The Ministry for Ministry Of Mining was created under Order No. 1 of
            2023, having three State Departments; State Department for Mining,
            State Department for the Blue Economy & Fisheries and State
            Department for Shipping and Maritime Affairs. The mandate includes
            policy development, mineral exploration, mapping of mineral
            resources, mining and minerals development, geological data, quarrying
            of rocks and industrial minerals, health and safety in mines and
            mineral testing.{" "}
            <span className="text-[#d4a900]">Read More......</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default PressRelease;