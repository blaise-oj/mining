import { useState } from "react";

const data = [
  {
    title: "Dissemination of mining and geological information",
    content:
      "Dissemination of mining and geological information through advise, seminars, reports, publications. The Ministry shares information on minerals and mining with stakeholders either through its own initiative to create awareness or on request.",
  },
  {
    title: "Licensing",
    content:
      "Processing of applications for mining rights, licenses, permits and related approvals.",
  },
  {
    title: "Document verification",
    content:
      "Verification of mining documents, certificates, permits and official records.",
  },
  {
    title: "Mineral Laboratory Services",
    content:
      "Provision of laboratory testing and analysis services for minerals and geological samples.",
  },
  {
    title: "Geological Survey Services",
    content:
      "Provision of geological survey information, mapping and technical guidance.",
  },
];

const MineralsLicensing = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1070px] mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#8b0000]">
            Mining Functions Services
          </h1>
          <div className="w-20 h-[2px] bg-[#8b0000] mx-auto mt-5"></div>
        </div>

        <div className="space-y-5">
          {data.map((item, index) => (
            <div key={item.title} className="border border-gray-300">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center px-4 py-5 font-bold text-left"
              >
                {item.title}
                <span className="text-2xl text-[#5c1b0b]">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-4 pb-8 text-blue-600 leading-8">
                  <p className="font-bold mb-5">{item.content.split(".")[0]}.</p>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralsLicensing;