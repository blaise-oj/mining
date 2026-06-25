import { useState } from "react";

const AccordionPage = ({ title, subtitle, items }) => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1070px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#8b0000] mb-5">{title}</h1>
        <div className="w-20 h-[2px] bg-[#8b0000] mb-5"></div>

        {subtitle && (
          <h2 className="text-2xl font-bold text-[#8b0000] mb-5">
            {subtitle}
          </h2>
        )}

        <div className="space-y-5">
          {items.map((item, index) => (
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
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionPage;