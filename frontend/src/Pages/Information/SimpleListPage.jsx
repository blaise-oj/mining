import PageBanner from "../../Components/PageBanner";

const SimpleListPage = ({ title, items }) => {
  return (
    <>
      <PageBanner title={title} />

      <section className="bg-white py-14">
        <div className="max-w-[1170px] mx-auto px-4">
          <ul className="list-disc space-y-2 pl-6 text-[#d4a900]">
           {items.map((item) => (
  <li key={item.name}>
    {item.pdf ? (
      <a
        href={item.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#d4a900]"
      >
        {item.name}
      </a>
    ) : (
      <span className="text-[#d4a900]">
        {item.name}
      </span>
    )}
  </li>
))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SimpleListPage;