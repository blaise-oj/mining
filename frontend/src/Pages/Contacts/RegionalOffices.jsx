const offices = [
  {
    office: "Mombasa",
    address: "Mvita House, Kwale Road\nP.O Box 85420-80100, Mombasa\nmombasa.rmo@mining.go.ke",
    jurisdiction: "Mombasa, Kilifi, Lamu counties and Lower Tana River County",
  },
  {
    office: "Kwale",
    address: "Mining Office – Kwale, Along Kwale-Kinango Road\nP.O Box 203-80403, Kwale\nkwale.rmo@mining.go.ke",
    jurisdiction: "Kwale County",
  },
  {
    office: "Garissa",
    address: "Mining Office Garissa, Along Garissa – Hola Road\nP.O Box 595-070100, Garissa\ngarissa.rmo@mining.go.ke",
    jurisdiction: "Garissa, Wajir, Mandera and Upper Tana River",
  },
  {
    office: "Wundanyi",
    address: "Voi Gem Centre, Opposite Voi Stadium\nP.O Box 725-80300, Voi\nwundanyi.rmo@mining.go.ke",
    jurisdiction: "Taita Taveta County",
  },
  {
    office: "Kitui",
    address: "Kitui County Commissioner’s Compound\nP.O Box 1443-90200, Kitui\nkitui.rmo@mining.go.ke",
    jurisdiction: "Kitui, Makueni",
  },
  {
    office: "Embu",
    address: "Off Embu – Meru Highway, Near Embu Catholic Church\nP.O Box 689-60100, Embu\nembu.rmo@mining.go.ke",
    jurisdiction: "Embu and Kirinyaga counties",
  },
  {
    office: "Chuka",
    address: "chuka.rmo@mining.go.ke",
    jurisdiction: "Tharaka – Nithi and Meru counties",
  },
  {
    office: "Nyeri",
    address: "Nyeri Provincial Office\n3RD Floor, Block ‘B’, Kamakwa\nP.O Box 1411-10100, Nyeri\nnyeri.rmo@mining.go.ke",
    jurisdiction: "Nyeri, Murang’a and Nyandarua counties",
  },
  {
    office: "Nanyuki",
    address: "Mining Office- Nanyuki\nAlong Sagana Road, off Nanyuki – Timau Highway\nnanyuki.rmo@mining.go.ke",
    jurisdiction: "Laikipia, Samburu and Isiolo counties",
  },
  {
    office: "Marsabit",
    address: "County Commissioner’s Compound\nMarsabit County\nmarsabit.rmo@mining.go.ke",
    jurisdiction: "Marsabit County",
  },
  {
    office: "Nakuru",
    address: "Ndimu House, Kenyatta Avenue\nP.O Box Nakuru\nnakuru.rmo@mining.go.ke",
    jurisdiction: "Nakuru, Kericho, Bomet",
  },
  {
    office: "Baringo",
    address: "baringo.rmo@mining.go.ke",
    jurisdiction: "Baringo County",
  },
  {
    office: "Eldoret",
    address: "Ministry of Water Compound\nP.O Box, Eldoret\neldoret.rmo@mining.go.ke",
    jurisdiction: "Uasin Gishu, Nandi, Trans Nzoia, West Pokot",
  },
  {
    office: "Lodwar",
    address: "Along Lodwar – Kitale Highway, near Turkwel Bridge\nP.O Box 245-30500, Lodwar\nlodwar.rmo@mining.go.ke",
    jurisdiction: "Turkana County",
  },
  {
    office: "Kakamega",
    address: "Mining Office – Kakamega, Hospital Road Kakamega\nP.O Box, Kakamega\nkakamega.rmo@mining.go.ke",
    jurisdiction: "Kakamega, Vihiga, Busia and Bungoma counties",
  },
  {
    office: "Kisumu",
    address: "Mining Office – Kisumu\nOchieng Oneko Road, Next to Kisumu County Headquarters\nP.O Box 1337-40100, Kisumu\nkisumu.rmo@mining.go.ke",
    jurisdiction: "Kisumu, Siaya and Nandi counties",
  },
  {
    office: "Migori",
    address: "Mining Office – Migori\nOff Posta – Ngege Road\nAdjacent to Huduma Centre - Migori\nP.O Box-1070-40400, Suna-Migori\nmigori.rmo@mining.go.ke",
    jurisdiction: "Migori, Homa Bay, Kisii, Nyamira and Narok counties",
  },
  {
    office: "Nairobi",
    address: "Madini House, Machakos Road Industrial Area\nP.O. Box 30009 -00100, Nairobi\nnairobi.rmo@mining.go.ke",
    jurisdiction: "Nairobi County",
  },
  {
    office: "Voi Gem Centre",
    address: "Voi Gem Centre, Opposite Voi Stadium\nP.O Box 725-80300, Voi\nvoi.rmo@mining.go.ke",
    jurisdiction: "Voi",
  },
];

const RegionalOffices = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1140px] mx-auto px-4">
        <p className="text-[#8b0000] tracking-[6px] font-bold mb-2">
          Ministry of Mining and Petroleum
        </p>

        <h1 className="text-4xl font-bold text-[#8b0000]">
          Regional Offices
        </h1>

        <div className="w-20 h-[2px] bg-[#8b0000] my-6"></div>

        <div className="overflow-x-auto">
          <table className="w-full border border-black text-blue-600 text-[16px]">
            <thead>
              <tr className="text-left">
                <th className="border border-black px-2 py-1 w-[17%]">
                  Regional Office
                </th>
                <th className="border border-black px-2 py-1 w-[55%]">
                  Address
                </th>
                <th className="border border-black px-2 py-1 w-[28%]">
                  Jurisdiction of the Office Counties
                </th>
              </tr>
            </thead>

            <tbody>
              {offices.map((item) => (
                <tr key={item.office}>
                  <td className="border border-black px-2 py-1 align-top">
                    {item.office}
                  </td>

                  <td className="border border-black px-2 py-1 align-top whitespace-pre-line">
                    {item.address}
                  </td>

                  <td className="border border-black px-2 py-1 align-top">
                    {item.jurisdiction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RegionalOffices;