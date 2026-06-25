import PageBanner from "../../Components/PageBanner";

const GeneralDocuments = () => {
  return (
    <>
      <PageBanner title="General Documents" />

      <section className="bg-white py-14">
        <div className="max-w-[1170px] mx-auto px-4 text-blue-600 leading-8">
          <p className="font-bold mb-16">
            Call for Comments on the Proposed Ratification of BBNJ, Draft
            National Aquaculture Policy 2025 and The Fisheries Management and
            Development Act (Monitoring Control and Surveillance) Regulations
            2025.
          </p>

          <h3 className="font-bold mb-5">BBNJ Agreement</h3>
          <ul className="list-disc pl-8 text-[#d4a900] space-y-2 mb-6">
            <li>Public Notice On The Bbnj Agreement</li>
            <li>BBNJ_Public_Participation_Questions_Kenya</li>
            <li>Text of the Agreement in English</li>
            <li>Mkataba Wa Mkutano Wa Umoja Wa Mataifa</li>
          </ul>

          <h3 className="font-bold mb-5">Aquaculture Policy</h3>
          <ul className="list-disc pl-8 text-[#d4a900] space-y-2 mb-6">
            <li>Draft Aquaculture Policy</li>
            <li>Feed Back for Draft National Aquaculture Policy</li>
          </ul>

          <h3 className="font-bold mb-5">MCS Regulations</h3>
          <ul className="list-disc pl-8 text-[#d4a900] space-y-2">
            <li>Feed Back for Draft MCS Regulations</li>
            <li>Revised Draft 2 MCS Regulations</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GeneralDocuments;