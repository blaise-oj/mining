import PageBanner from "../../Components/PageBanner";

const Speeches = () => {
  const speeches = [
    "Speech by His Excellency Hon. Uhuru Kenyatta, C.G.H., President of the Republic of Kenya and Commander in Chief of the Defence Forces During the Flagging off of the Early Oil Pilot Scheme Maiden Consignment on Monday the 26th of August 2019 at the Kipevu Oil Jetty, in Mombasa County",
    "Speech by The Cabinet Secretary for Petroleum and Mining John Munyes, EGH during the flagging off of the early oil pilot scheme maiden consignment on Monday the 26th of august 2019 at the Kipevu Oil jetty, in Mombasa county",
  ];

  return (
    <>
      <PageBanner title="Speeches" />

      <section className="bg-white py-14 min-h-[400px]">
        <div className="max-w-[1170px] mx-auto px-4">
          <ul className="list-disc pl-6 space-y-3 text-[#d4a900]">
            {speeches.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Speeches;