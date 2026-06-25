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

            <p className="flex gap-2 border-b border-white/10 pb-4">
              <Phone size={18} /> Tel: +254 106 46363
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
            <li><Link to="/links/presidency">The Presidency</Link></li>
            <li><Link to="/links/national-mining-corporation">National Mining Corporation</Link></li>
            <li><Link to="/links/mining-cadastre">Mining Cadastre Portal</Link></li>
            <li><Link to="/links/national-geodata-centre">National GeoData Centre</Link></li>
            <li><Link to="/links/nema">National Environment Management Authority</Link></li>
            <li><Link to="/links/amgc">African Minerals Geosciences Centre (AMGC)</Link></li>
            <li><Link to="/departments/mining">State Department for Mining</Link></li>
            <li><Link to="/departments/maritime-affairs">State Department for Maritime Affairs</Link></li>
            <li><Link to="/departments/blue-economy">State Department for Blue Economy</Link></li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-bold">SAGAS</h3>
          <div className="w-12 h-[2px] bg-[#8b2b1d] mt-5 mb-8"></div>

          <ol className="list-decimal list-inside space-y-3 text-sm leading-7">
            <li><Link to="/sagas/fish-levy-trust-fund">Fish Levy Trust Fund</Link></li>
            <li><Link to="/sagas/kenya-fisheries-service">The Kenya Fisheries Service</Link></li>
            <li><Link to="/sagas/kmfri">The Kenya Marine and Fisheries Research Institute</Link></li>
            <li><Link to="/sagas/kenya-fishing-industries">Kenya Fishing Industries Corporation.</Link></li>
            <li><Link to="/sagas/fish-marketing-authority">The Fish Marketing Authority</Link></li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-bold">MIBEMA FACEBOOK</h3>
          <div className="w-12 h-[2px] bg-[#8b2b1d] mt-5 mb-8"></div>

          <div className="bg-white text-black w-[250px] rounded-t-xl overflow-hidden">
            <img src={facebookImg} alt="Facebook preview" className="h-[125px] w-full object-cover" />

            <div className="p-4 flex gap-3">
              <img src={arms} alt="arms" className="w-14 h-14 object-contain" />
              <div>
                <h4 className="text-xl font-bold leading-6">
                  Ministry of Mining, Blue Economy and Maritime Affairs
                </h4>
                <p className="text-sm mt-1">2.5K followers</p>
              </div>
            </div>

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
            <span className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
              <FaFacebookF />
            </span>
            <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <FaTwitter />
            </span>
            <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
              <FaGooglePlusG />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;