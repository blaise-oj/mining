const LegalDocuments = () => {
  const docs = [
    "MINING AND MINERALS POLICY SESSIONAL PAPER NO. 7 OF 2016",
    "Mining Act 12 of 2016",
    "Mining Act 12 of 2016 Subsidiary",
    "Petroleum Act 2 of 2019",
    "Petroleum Development Fund Act 4 of 1991",
    "Explosives Act, Cap 115",
    "GeologistRegistrationAct10of1993",
    "GeologistRegistrationAct10of1993 Subsidiary",
    "Gazette Vol. 37 25-2-22 Special (NLC)",
    "Gazette Vol. 8 14-1-22 Special (NLC)",
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1170px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#8b0000]">Legal Documents</h1>
        <div className="w-20 h-[2px] bg-[#8b0000] my-6"></div>

        <p className="text-blue-600 leading-8 max-w-3xl">
          The Constitution of Kenya, 2010 vests the ownership of natural
          resources including hydrocarbons and minerals in the national
          government in trust for the people of Kenya. The following are the
          existing principal policies and laws governing petroleum and mining in
          Kenya:
        </p>

        <ul className="list-disc pl-8 mt-4 text-[#d4a900] space-y-2">
          {docs.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LegalDocuments;