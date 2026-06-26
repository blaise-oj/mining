import miningImg from "../../assets/mining-function.jpg";
import blueImg from "../../assets/blue-economy.jpg";
import maritimeImg from "../../assets/maritime.jpg";

const Functions = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1170px] mx-auto px-4">
        <p className="text-[#8b0000] tracking-[6px] font-bold text-sm mb-2">
          State Department for Mining
        </p>

        <h1 className="text-4xl font-bold text-[#8b0000] mb-5">
          Functions
        </h1>

        <div className="w-20 h-[2px] bg-[#8b0000] mb-10"></div>

        {/* MINING */}
        <div className="mb-16">
          <img src={miningImg} alt="Mining Function" className="w-full h-[260px] object-cover mb-8" />

          <h2 className="text-3xl font-bold text-[#8b0000] mb-5">
            Mining Function
          </h2>

          <div className="text-blue-600 leading-8 space-y-5">
            <p>
              This function is charged under section 17(1)(a) of the Mining Act, 2016, to among others promote the effective and efficient management and the development of mineral resources and the mining sector; and exercising regulatory administration over mining and prospecting operations.
            </p>

            <p>
              The Mining and Geological function is headed by the Commissioner of Mines and Geology and is responsible for the following functions:
            </p>

            <ol className="list-decimal ml-8 space-y-2">
              <li>Development and review of policies, legal and regulatory framework for guiding geological survey and mining.</li>
              <li>Coordination of provision of geoscience expertise and data to the government on all matters related to geology and the development of minerals.</li>
              <li>Coordination of operations in geological, geophysical, geochemical, seismological and hydro-geological surveys, investigations and mapping.</li>
              <li>Development of a national repository of geo-science information and facilitation of access to this information by the general public.</li>
              <li>Exercising regulatory administration and supervision over all prospecting, mining, processing, refining and treatment operations, transport and any dealings in minerals.</li>
              <li>Monitoring of compliance and ensuring compliance with the law, regulations and conditions relating to mineral rights.</li>
              <li>Preparation of the necessary reports required under the Mining Act, 2016.</li>
              <li>Exercising regulatory administration and supervision over the use of minerals.</li>
              <li>Commercial explosives in accordance with the Explosives Act, Cap. 115.</li>
              <li>Provision of advice during the negotiation of mineral agreements, minerals related litigation and arbitration.</li>
              <li>Promotion of co-operation among state agencies, county governments, the private sector, research bodies, non-governmental organizations and other organizations engaged in mining activities.</li>
            </ol>
          </div>
        </div>

        {/* BLUE ECONOMY */}
        <div className="mb-16">
          <img src={blueImg} alt="Blue Economy and Fisheries Function" className="w-full h-[260px] object-cover mb-8" />

          <h2 className="text-3xl font-bold text-[#8b0000] mb-5">
            Blue Economy and Fisheries Function
          </h2>

          <div className="text-blue-600 leading-8 space-y-5">
            <p>The State Department comprises of:</p>

            <p>
              <b>i) Technical Department</b> &nbsp; a) Directorate for Blue Economy Development.
            </p>

            <p className="ml-10">
              b) Directorate for Fisheries and Aquaculture Development.
            </p>

            <p>
              <b>ii) Administration Department</b> &nbsp; a) Administration Unit
            </p>

            <p className="ml-10">b) Finance and Accounts</p>
            <p className="ml-10">c) Human Resource Management and Development.</p>
            <p className="ml-10">d) Central Planning and Project Monitoring Unit.</p>
            <p className="ml-10">e) ICT.</p>
            <p className="ml-10">f) Public Communication.</p>
            <p className="ml-10">g) Internal Audit.</p>

            <p>The State Department also has 4 State corporations:</p>

            <ul className="list-disc ml-8 space-y-2">
              <li>The Kenya Marine and Fisheries Research Institute (KMFRI);</li>
              <li>The Kenya Fisheries Service (KeFS);</li>
              <li>The Fish Marketing Authority (KFMA); and</li>
              <li>The Kenya Fishing Industries Corporation (KFIC).</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#37b5ed]">Mission.</h3>
            <p>
              To facilitate sustainable management and development of fishery resources, Aquaculture and the Blue Economy for accelerated socio-economic development.
            </p>

            <h3 className="text-2xl font-bold text-[#37b5ed]">Vision.</h3>
            <p>
              To be a regional leader in governance of fisheries resources, Aquaculture and Blue Economy.
            </p>

            <h3 className="text-2xl font-bold text-[#37b5ed]">Mandate.</h3>
            <p>
              To coordinate the development of policy, legal, regulatory and institutional framework of Fisheries resources, Aquaculture and the Blue Economy management and development.
            </p>

            <h3 className="text-2xl font-bold text-[#37b5ed]">Functions.</h3>

            <ul className="list-disc ml-8 space-y-2">
              <li>Co-ordinate development of national oceans and blue economy strategy and policy.</li>
              <li>Fisheries and Aquaculture Policy.</li>
              <li>Co-ordination of development of policy, legal, regulatory and institutional framework for the fisheries industry and the blue economy.</li>
              <li>Drive sustainable transformation and diversification of the ocean’s economy by promoting research and innovation.</li>
              <li>Increase local participation and investment in the blue economy through private sector engagement and partnerships.</li>
              <li>Fisheries Marketing Policy.</li>
              <li>Fishing Licensing.</li>
              <li>Development of Fisheries.</li>
              <li>Promote Fish Consumption.</li>
              <li>Fish Quality Assurance.</li>
              <li>Enhancement of technical co-operation with partner states.</li>
              <li>Management and licensing of local and foreign fishing trawlers in Kenya waters.</li>
            </ul>
          </div>
        </div>

        {/* MARITIME */}
        <div>
          <img src={maritimeImg} alt="Maritime Affairs Function" className="w-full h-[260px] object-cover mb-8" />

          <h2 className="text-3xl font-bold text-[#8b0000] mb-5">
            Maritime Affairs Function
          </h2>

          <div className="text-blue-600 leading-8 space-y-5">
            <p>
              Formulation of shipping and maritime policies and legislation so as to ensure safety of life and ships at sea and at inland waters.
            </p>

            <ul className="list-disc ml-8 space-y-2">
              <li>Development and implementation of maritime policies.</li>
              <li>Promotion of maritime safety and security.</li>
              <li>Coordination of maritime affairs programmes.</li>
              <li>Promotion of shipping and maritime transport services.</li>
              <li>Support for sustainable development of Kenya’s maritime sector.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functions;