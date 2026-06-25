const Feedback = () => {
  return (
    <section className="bg-white py-8 min-h-[620px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <form className="w-full max-w-[640px]">
          <div className="mb-7">
            <label className="block text-sm font-bold mb-2">YOUR NAME</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-[195px] h-[52px] border border-gray-300 rounded-md px-4 outline-none"
            />
          </div>

          <div className="mb-7">
            <label className="block text-sm font-bold mb-2">YOUR EMAIL</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-[195px] h-[52px] border border-gray-300 rounded-md px-4 outline-none"
            />
          </div>

          <div className="mb-7">
            <label className="block text-sm font-bold mb-2">SUBJECT</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-[195px] h-[52px] border border-gray-300 rounded-md px-4 outline-none"
            />
          </div>

          <div className="mb-7">
            <label className="block text-sm font-bold mb-2">MESSAGE</label>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full h-[165px] border border-gray-300 rounded-md px-4 py-3 outline-none resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#704033] text-white font-bold px-10 py-3 rounded-full hover:bg-[#5a3026]"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Feedback;