import AccordionPage from "../../Components/AccordionPage";

const MiningProjects = () => {
  const items = [
    { title: "Geological mapping, Mineral Exploration and Evaluation",
        content: (
    <p>
      This project focuses on geological mapping, mineral exploration and
      evaluation to identify mineral potential and support investment in the
      mining sector.
    </p>
  ),
     },
    { title: "Establishment of a Mineral Certification Laboratory",
         content: (
      <p>
        This project supports the establishment of a laboratory for testing,
        analysis and certification of minerals.
      </p>
    ),
     },
    { title: "Establishment of a Geological Data Centre" },
    { title: "Environmental and Engineering Geology" },
    { title: "Geophysical Surveys and Seismology" },
    { title: "Mineral Promotion and Marketing" },
    { title: "Establishment of a Gemstone Value Addition Centre" },
    { title: "Establishment of a Granite Processing Plant" },
    { title: "Establishment of a Gold Refinery Centre" },
    { title: "Upgrade of Online Transactional Mining Cadastre Portal" },
    { title: "Royalty Management System" },
    { title: "Establishment of Soapstone Processing and value addition - Kisii" },
  ];

  return (
    <AccordionPage
      title="Mining Projects"
      subtitle="Geological Survey and Geo-information Management Projects"
      items={items}
    />
  );
};

export default MiningProjects;