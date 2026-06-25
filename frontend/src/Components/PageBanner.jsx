import oceanBg from "../assets/page-banner.jpg";

const PageBanner = ({ title }) => {
  return (
    <section
      className="h-[130px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${oceanBg})` }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm mt-2">Home</p>
      </div>
    </section>
  );
};

export default PageBanner;