import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import arms from "../assets/arms.png";
import facebookImg from "../assets/facebook-preview.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#071819] text-white">
      <div className="max-w-[1170px] mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold">CONTACT INFO</h3>
          <div className="w-12 h-[2px] bg-[#8b2b1d] mt-5 mb-8"></div>

          <p className="mb-6">State Department for Mining</p>

          <div className="space-y-5 text-sm leading-7">
            <p className="flex gap-2 border-b border-white/10 pb-4">
              <Home size={18} /> 14th Floor, SHA Building, Ragati Road
            </p>

            <p className="flex gap-2 border-b border-white/10 pb-4">
              <MapPin size={18} /> P.O. Box 30009, 00100, Nairobi, Kenya
            </p>



            <p className="flex gap-2">
              <Mail size={18} /> info@ministryofmining.co.ke
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">RELATED LINKS</h3>
          <div className="w-12 h-[2px] bg-[#8b2b1d] mt-5 mb-8"></div>

          <ol className="list-decimal list-inside space-y-2 text-sm leading-7">
            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                The Presidency
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                National Mining Corporation
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                Mining Cadastre Portal
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                National GeoData Centre
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                National Environment Management Authority
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                African Minerals Geosciences Centre (AMGC)
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                State Department for Mining
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                State Department for Maritime Affairs
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                State Department for Blue Economy
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-bold">SAGAS</h3>
          <div className="w-12 h-[2px] bg-[#8b2b1d] mt-5 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-sm leading-7">
            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                Fish Levy Trust Fund
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                The Kenya Fisheries Service
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                The Kenya Marine and Fisheries Research Institute
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                Kenya Fishing Industries Corporation
              </a>
            </li>

            <li>
              <a href="https://www.mining.go.ke" target="_blank" rel="noopener noreferrer">
                The Fish Marketing Authority
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-bold">MIBEMA FACEBOOK</h3>
          <div className="w-12 h-[2px] bg-[#8b2b1d] mt-5 mb-8"></div>

          <div className="bg-white text-black w-[250px] rounded-t-xl overflow-hidden">
            <img src={facebookImg} alt="Facebook preview" className="h-[125px] w-full object-cover" />

            <a
              href="https://www.facebook.com/profile.php?id=100078840349796"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-100 transition"
            >
              <div className="p-4 flex gap-3">
                <img
                  src={arms}
                  alt="arms"
                  className="w-14 h-14 object-contain"
                />

                <div>
                  <h4 className="text-xl font-bold leading-6">
                    Ministry of Mining, Blue Economy and Maritime Affairs
                  </h4>

                  <p className="text-sm mt-1">2.5K followers</p>
                </div>
              </div>
            </a>

            <p className="px-4 pb-4 text-sm">
              Ministry of Mining, Blue Economy and Maritime Affairs
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#030b0c] py-5">
        <div className="max-w-[1170px] mx-auto px-4 flex items-center justify-between text-sm">
          <p>© Copyright 2026 | Ministry Of Mining | All Rights Reserved.</p>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100078840349796"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:opacity-80 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/Petro_MiningKE?t=MlZIBD03M0c_8yHdcwXKjw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-80 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.ministryofmines.co.ke/mining-institutions.html#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center hover:opacity-80 transition"
            >
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;