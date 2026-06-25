import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBanner from "../../Components/PageBanner";

import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";
import small1 from "../../assets/small-news1.jpg";
import small2 from "../../assets/small-news2.jpg";
import small3 from "../../assets/small-news3.jpg";

const mainNews = [
  {
    image: news1,
    date: "October 3, 2024",
    title: "IFAD Commended For Supporting Fish Farming",
    path: "/media/news-events/ifad-commended-for-supporting-fish-farming",
  },
  {
    image: news2,
    date: "October 2, 2024",
    title: "CS Joho Commits To Fully Implement Ministerial Performance Contract",
    path: "/media/news-events/cs-joho-performance-contract",
  },
  {
    image: news3,
    date: "October 1, 2024",
    title: "Ministry And Qatari Embassy Agree To Develop MOU On Collaboration",
    path: "/media/news-events/ministry-qatar-mou",
  },
  {
    image: news4,
    date: "September 18, 2024",
    title: "Kenya Seeks Closer Partnership With Oman In The Blue Economy Sector",
    path: "/media/news-events/kenya-oman-blue-economy",
  },
  {
    image: news5,
    date: "September 14, 2024",
    title: "Press Release- Public Notice On Strategic Minerals",
    path: "/media/press-releases/strategic-minerals",
  },
];

const smallNews = [
  {
    image: small1,
    title: "Blue Economy And Fisheries",
    date: "August 26, 2023",
    path: "/media/news-events/blue-economy-fisheries-1",
  },
  {
    image: small2,
    title: "Blue Economy And Fisheries",
    date: "February 27, 2023",
    path: "/media/news-events/blue-economy-fisheries-2",
  },
  {
    image: small3,
    title: "Blue Economy And Fisheries",
    date: "February 24, 2023",
    path: "/media/news-events/blue-economy-fisheries-3",
  },
];

const NewsEvents = () => {
  return (
    <>
      <PageBanner title="News & Events" />

      <section className="bg-white py-24">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {mainNews.map((item) => (
              <div key={item.title}>
                <Link to={item.path}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[145px] object-cover mb-5"
                  />
                </Link>

                <p className="text-gray-400 text-sm mb-2">
                  News / {item.date}
                </p>

                <Link
                  to={item.path}
                  className="block text-[20px] leading-[1.25] font-bold text-black hover:text-[#8b0000]"
                >
                  {item.title}
                </Link>

                <Link
                  to={item.path}
                  className="inline-flex items-center gap-1 mt-4 text-[#5c1b0b] hover:text-[#d4a900]"
                >
                  Read More <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
            {smallNews.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-start gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[90px] h-[60px] object-cover"
                />

                <div>
                  <h3 className="font-bold text-black hover:text-[#8b0000]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvents;