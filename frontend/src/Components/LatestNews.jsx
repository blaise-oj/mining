import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.jpg";

const newsItems = [
  {
    image: news1,
    date: "April 3, 2026",
    title: "IFAD Commended For Supporting Fish Farming",
    path: "/media/news-events/ifad-commended-for-supporting-fish-farming",
  },
  {
    image: news2,
    date: "July 2, 2026",
    title: "CS Joho Commits To Fully Implement Ministerial Performance Contract",
    path: "/media/news-events/cs-joho-commits-performance-contract",
  },
  {
    image: news3,
    date: "May 1, 2026",
    title: "Ministry And Qatari Embassy Agree To Develop MOU On Collaboration",
    path: "/media/news-events/ministry-qatari-embassy-mou",
  },
  {
    image: news4,
    date: "September 18, 2025",
    title: "Kenya Seeks Closer Partnership With Oman In The Blue Economy Sector",
    path: "/media/news-events/kenya-oman-blue-economy",
  },
  {
    image: news5,
    date: "September 14, 2025",
    title: "Press Release- Public Notice On Strategic Minerals",
    path: "/media/press-releases/public-notice-strategic-minerals",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-[26px] font-bold text-[#8b0000]">
          The Latest News
        </h2>
        <div className="w-20 h-[2px] bg-[#8b0000] mx-auto mt-5"></div>
      </div>

      <div className="max-w-[1170px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {newsItems.map((item) => (
          <div key={item.title}>
            <Link to={item.path}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[145px] object-cover mb-5"
              />
            </Link>

            <p className="text-gray-400 text-sm mb-2">News / {item.date}</p>

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
    </section>
  );
};

export default LatestNews;