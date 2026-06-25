import AccordionPage from "../Components/AccordionPage";

const FAQs = () => {
  const items = [
    {
      title: "Where are the Ministry offices located?",
      content: (
        <p>
          The Principal Secretary, Ministry of Petroleum and Mining, 22nd floor -
          Nyayo House.
        </p>
      ),
    },
    {
      title:
        "How many Petroleum Exploration Blocks are there in Kenya and how many are open?",
      content: <p>There are petroleum exploration blocks in Kenya. Details can be updated later.</p>,
    },
    {
      title: "What is the process for applying Petroleum Exploration License?",
      content: <p>An applicant submits the required documents for review and approval by the relevant authority.</p>,
    },
    {
      title: "What is the process for applying Petrol Station license?",
      content: <p>The applicant submits an application with the necessary approvals, business documents and safety requirements.</p>,
    },
    {
      title: "If I find minerals on my land do they belong to me?",
      content: (
        <p>
          No, minerals belong to the people of Kenya and are managed on their
          behalf by the National Government. You need a mining licence or permit
          to mine minerals.
        </p>
      ),
    },
    {
      title: "How do I get a licence to do mining?",
      content: <p>You apply through the relevant mining licensing office or online cadastre portal with the required documents.</p>,
    },
    {
      title: "How long does it take to get the mining licence?",
      content: <p>The timeline depends on the type of licence and completeness of the application.</p>,
    },
    {
      title: "How much does it cost to get a mining licence?",
      content: <p>The cost depends on the type of licence, permit category and applicable government fees.</p>,
    },
    {
      title: "Do I need a permit to trade in minerals?",
      content: <p>Yes, mineral trading requires the appropriate permit or licence from the responsible authority.</p>,
    },
    {
      title: "I would like to import minerals do I need a permit?",
      content: <p>Yes, importation of minerals requires relevant permits and clearance documents.</p>,
    },
    {
      title: "Can Kenyans be employed by international mining companies?",
      content: <p>Yes, Kenyans can be employed by international mining companies operating legally in Kenya.</p>,
    },
    {
      title: "Can Kenyans do business with international mining companies?",
      content: <p>Yes, Kenyans can provide goods, services and partnerships to international mining companies.</p>,
    },
    {
      title: "How do Kenyans benefit from minerals?",
      content: <p>Kenyans benefit through jobs, royalties, taxes, infrastructure, local business opportunities and national revenue.</p>,
    },
  ];

  return (
    <AccordionPage
      title="Frequently Asked Questions"
      items={items}
    />
  );
};

export default FAQs;