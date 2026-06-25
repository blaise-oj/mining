import PageBanner from "../../Components/PageBanner";

const Reports = () => {
  const reports = [
    "Final -ESIA Report Uvuvi House.",
    "Annex Ia-Uvuvi House Drawing and Design.",
    "PSC - Status of the Public Service Compliance with the Values and Principles in Articles 10 and 232 of the Constitution 2020/2021",
    "Draft) Land access and acquisition framework for the petroleum sector in Kenya",
    "South Lokichar Development Environmental and Social Impact Assessment (ESIA) document",
    "Tullow site Link: https://www.tullowoil.com/our-operations/africa/kenya/environmental-social/",
    "Gender Assessment Study Report",
    "Preliminary Report - Resettlement Policy Framework for The Petroleum Sector in Kenya",
  ];

  return (
    <>
      <PageBanner title="Reports" />

      <section className="bg-white py-14 min-h-[400px]">
        <div className="max-w-[1170px] mx-auto px-4">
          <ul className="list-disc pl-6 space-y-2 text-[#d4a900]">
            {reports.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Reports;