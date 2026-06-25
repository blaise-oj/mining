import SimpleListPage from "./SimpleListPage";

const BlueEconomyInformation = () => {
  const items = [
    {
      name: "Fisheries Annual Statistical Bulletin 2010",
      pdf: "/pdfs/fisheries-2010.pdf",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2011",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2012",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2013",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2014",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2015",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2016",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2017",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2018",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2019",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2020",
    },
    {
      name: "Fisheries Annual Statistical Bulletin 2021",
    },
  ];

  return (
    <SimpleListPage
      title="Blue Economy and Fisheries Information"
      items={items}
    />
  );
};

export default BlueEconomyInformation;