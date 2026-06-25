import PageBanner from "../../Components/PageBanner";

const MiningInformation = () => {
  return (
    <>
      <PageBanner title="Mining Information" />

      <section className="bg-white py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-[#8b0000] tracking-[6px] font-bold">Mining</p>
            <div className="w-20 h-[2px] bg-[#8b0000] mx-auto mt-5"></div>
          </div>

          <div className="text-black leading-7">
            <p className="mb-6">
              This function is charged under section 17(1)(a) of the Mining Act,
              2016, to among others promote the effective and efficient management
              and the development of mineral resources and the mining sector; and
              exercising regulatory administration over mining and prospecting operations.
            </p>

            <p className="mb-6">
              The Mining and Geological function is headed by the Commissioner of
              Mines and Geology and is responsible for the following functions:
            </p>

            <ol className="list-decimal pl-10 space-y-2">
              <li>Development and review of policies, legal and regulatory framework for guiding geological survey and mining</li>
              <li>Coordination of provision of geoscience expertise and data to the government on all matters related to geology and the development of minerals</li>
              <li>Coordination of operations in geological, geophysical, geochemical, seismological and hydro-geological surveys, investigations and mapping</li>
              <li>Development of a national repository of geo-science information and facilitation of access to this information by the general public</li>
              <li>Exercising regulatory administration and supervision over prospecting, mining, processing, refining and treatment operations</li>
              <li>Monitoring of compliance and ensuring compliance with the law, regulations and conditions relating to mineral rights</li>
              <li>Preparation of the necessary reports required under this Mining Act, 2016</li>
              <li>Commercial explosives in accordance with the Explosives Act</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiningInformation;