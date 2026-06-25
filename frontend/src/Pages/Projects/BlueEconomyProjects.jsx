import AccordionPage from "../../Components/AccordionPage";

const BlueEconomyProjects = () => {
  const items = [
    {
      title: "Aquaculture Business Development Programme",
      content: (
        <>
          <p className="font-bold mb-4">
            Aquaculture Business Development Programme
          </p>
          <p className="mb-4">
            Aquaculture Business Development Programme (ABDP) is a jointly
            funded program by the Government of Kenya and the International Fund
            for Agricultural Development (IFAD). The Programme targets counties
            with high concentrations of aquaculture activity, high production,
            existing sectoral infrastructure, adequate water resources and
            marketing potential.
          </p>
          <p className="text-[#d4a900]">ABDP</p>
        </>
      ),
    },
    {
      title:
        "The Kenya Marine Fisheries and Socio-Economic Development Project",
      content: (
        <p>
          This project supports marine fisheries development and socio-economic
          growth in coastal communities.
        </p>
      ),
    },
  ];

  return (
    <AccordionPage
      title="Blue Economy and Fisheries Projects"
      subtitle="Upstream Projects"
      items={items}
    />
  );
};

export default BlueEconomyProjects;