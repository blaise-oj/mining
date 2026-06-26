import { useParams } from "react-router-dom";

import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";
import small1 from "../../assets/small-news1.jpg";
import small2 from "../../assets/small-news2.jpg";
import small3 from "../../assets/small-news3.jpg";

const newsData = {
  "ifad-commended-for-supporting-fish-farming": {
    image: news1,
    date: "October 3, 2024",
    title: "IFAD Commended For Supporting Fish Farming",
    paragraphs: [
      "Nairobi, 3rd October 2024 – The International Fund for Agricultural Development (IFAD) has been commended for supporting fish farming in the country.",
      "Ministry Of Mining Cabinet Secretary Hassan Ali Joho has expressed satisfaction that IFAD is playing a major role in supporting the fisheries sector in the country through the Kshs 14 billion Aquaculture Business Development Programme (ABDP).",
    ],
  },

  "cs-joho-performance-contract": {
    image: news2,
    date: "October 2, 2024",
    title: "CS Joho Commits To Fully Implement Ministerial Performance Contract",
    paragraphs: [
      "Ministry Of Mining Cabinet Secretary Hassan Ali Joho has affirmed his commitment to fully implement the financial year 2024-2025 ministerial Performance Contract.",
      "The CS pointed out that Performance contracting is an important management tool for enhancing efficiency and effectiveness in service delivery in the public sector.",
    ],
  },

  "ministry-qatar-mou": {
    image: news3,
    date: "October 1, 2024",
    title: "Ministry And Qatari Embassy Agree To Develop MOU On Collaboration",
    paragraphs: [
      "The Ministry of Mining, Blue Economy, and Maritime Affairs, in partnership with the Qatari Embassy in Kenya, has agreed to work together on developing a Memorandum of Understanding.",
      "This agreement will strengthen collaboration in mining, the blue economy and maritime affairs.",
    ],
  },

  "kenya-oman-blue-economy": {
    image: news4,
    date: "September 18, 2024",
    title: "Kenya Seeks Closer Partnership With Oman In The Blue Economy Sector",
    paragraphs: [
      "Kenya has expressed interest in strengthening its partnership with Oman in the blue economy sector.",
      "The Cabinet Secretary emphasized that his ministry is committed to collaborating with partners across various sectors to revitalize the blue economy.",
    ],
  },

  "strategic-minerals": {
    image: news5,
    date: "September 14, 2024",
    title: "Press Release- Public Notice On Strategic Minerals",
    paragraphs: [
      "This public notice provides information on strategic minerals and ongoing reforms within the mining sector.",
      "The ministry continues to implement measures aimed at improving governance, regulation and investment in the mineral sector.",
    ],
  },

  "blue-economy-fisheries-1": {
    image: small1,
    date: "August 26, 2023",
    title: "Blue Economy And Fisheries",
    paragraphs: [
      "The State Department continues to support blue economy and fisheries development through policy coordination, stakeholder engagement and sector programmes.",
    ],
  },

  "blue-economy-fisheries-2": {
    image: small2,
    date: "February 27, 2023",
    title: "Blue Economy And Fisheries",
    paragraphs: [
      "Blue Economy and Fisheries programmes remain central to sustainable resource management and socio-economic development.",
    ],
  },

  "blue-economy-fisheries-3": {
    image: small3,
    date: "February 24, 2023",
    title: "Blue Economy And Fisheries",
    paragraphs: [
      "The ministry continues to promote fisheries, aquaculture and blue economy initiatives across the country.",
    ],
  },
};

const NewsDetail = () => {
  const { slug } = useParams();
  const news = newsData[slug];

  if (!news) {
    return (
      <section className="py-16">
        <div className="max-w-[1070px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#8b0000]">
            News item not found
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1070px] mx-auto px-4">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-auto object-contain"
        />

        <h1 className="text-3xl font-bold text-[#8b0000] mb-4">
          {news.title}
        </h1>

        <p className="text-gray-500 mb-8">/ &nbsp; {news.date}</p>

        <div className="text-blue-600 leading-8 space-y-5">
          {news.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;