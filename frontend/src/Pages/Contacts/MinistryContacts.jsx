const MinistryContacts = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Left Contact Card */}
          <div className="bg-white shadow-md p-8">
            <h3 className="text-blue-600 font-bold text-xl mb-2">
              Cabinet Secretary
            </h3>

            <h4 className="font-bold text-lg mb-4">
              State Department for Mining
            </h4>

            <div className="space-y-2 text-blue-600">
              <p>Works Building, 3rd Floor, Ngong Road</p>
              <p>P.O Box 30009 - 00100, Nairobi</p>
              <p>Kenya</p>
              <p>Phone: +254 106 46363</p>
              <p>Email: info@ministryofmines.co.ke</p>
            </div>
          </div>

          {/* Middle Contact Card */}
          <div className="bg-white shadow-md p-8">
            <h3 className="text-blue-600 font-bold text-xl mb-2">
              Principal Secretary
            </h3>

            <h4 className="font-bold text-lg mb-4">
              Blue Economy and Fisheries
            </h4>

            <div className="space-y-2 text-blue-600">
              <p>Works Building</p>
              <p>Ngong Road</p>
              <p>P.O Box 58187 - 00200</p>
              <p>Nairobi</p>
              <p>Telephone: +254 106 46363</p>
              <p>Website: www.ministryofmines.co.ke</p>
              <p>Email: info@ministryofmines.co.ke</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="tracking-[4px] text-[#8b0000] uppercase mb-2">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold text-[#8b0000] mb-4">
              Feedback/Compliment
            </h2>

            <div className="w-20 h-[2px] bg-[#8b0000] mb-8"></div>

            <form className="space-y-6">
              <div>
                <label className="block font-bold mb-2">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-4"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-4"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">SUBJECT</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border p-4"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">MESSAGE</label>
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="w-full border p-4"
                />
              </div>

              <button
                type="submit"
                className="bg-[#6b3a2a] text-white px-10 py-4 rounded-full font-semibold"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10">
          <iframe
            title="Nyayo House"
            src="https://maps.google.com/maps?q=Nyayo%20House%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] border"
          />
        </div>

      </div>
    </section>
  );
};

export default MinistryContacts;