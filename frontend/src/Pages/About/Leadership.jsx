import PageBanner from "../../Components/PageBanner";

import leader1 from "../../assets/leader1.jpg";
import leader2 from "../../assets/leader2.jpg";
import leader3 from "../../assets/leader3.jpg";

const leaders = [
  {
    image: leader1,
    name: "H.E HASSAN ALI JOHO, EGH",
    title: "CS for Ministry Of Mining",
  },
  {
    image: leader2,
    name: "ELIJAH MWANGI",
    title: "Principal Secretary - Mining",
  },
  {
    image: leader3,
    name: "BETSY MUTHONI NJAGI , CBS",
    title: "Principal Secretary - Blue Economy and Fisheries",
  },
];

const Leadership = () => {
  return (
    <>
      <PageBanner title="Leadership" />

      <section className="bg-white py-14">
        <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader) => (
            <div key={leader.name} className="border border-gray-200 bg-white">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[315px] object-cover object-top"
              />

              <div className="p-5">
                <h3 className="text-[#d4a900] font-bold text-xl">
                  {leader.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Leadership;