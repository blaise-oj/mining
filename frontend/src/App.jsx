import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import VisionMission from "./Pages/About/VisionMission";
import MandateCoreValues from "./Pages/About/MandateCoreValues";
import Leadership from "./Pages/About/Leadership";


import BlueEconomyInformation from "./Pages/Information/BlueEconomyInformation";
import MiningInformation from "./Pages/Information/MiningInformation";
import MineralsLicensing from "./Pages/Services/MineralsLicensing";
import Functions from "./Pages/About/Functions";

import BlueEconomyProjects from "./Pages/Projects/BlueEconomyProjects";
import MiningProjects from "./Pages/Projects/MiningProjects";

import NewsEvents from "./Pages/Media/NewsEvents";
import PressRelease from "./Pages/Media/PressRelease";
import Speeches from "./Pages/Media/Speeches";
import GeneralDocuments from "./Pages/Media/GeneralDocuments";
import LegalDocuments from "./Pages/Media/LegalDocuments";
import Reports from "./Pages/Media/Reports";
import NewsDetail from "./Pages/Media/NewsDetail";

import FAQs from "./Pages/FAQs";

import Tracking from "./Pages/Tracking";
import AdminLogin from "./Pages/AdminLogin";
import AdminTracking from "./Pages/AdminTracking";


import MinistryContacts from "./Pages/Contacts/MinistryContacts";
import RegionalOffices from "./Pages/Contacts/RegionalOffices";
import Feedback from "./Pages/Contacts/Feedback";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/About/vision-mission-strategic-objectives"
          element={<VisionMission />}
        />

        <Route
          path="/About/mandate-core-values"
          element={<MandateCoreValues />}
        />

        <Route
          path="/About/leadership"
          element={<Leadership />}
        />
        <Route path="/about/functions" element={<Functions />} />

        <Route
          path="/Information/blue-economy-fisheries"
          element={<BlueEconomyInformation />}
        />

        <Route
          path="/Information/mining"
          element={<MiningInformation />}
        />

        <Route
          path="/Services/minerals-licensing"
          element={<MineralsLicensing />}
        />

        <Route
          path="/Projects/blue-economy-fisheries"
          element={<BlueEconomyProjects />}
        />

        <Route
          path="/Projects/mining"
          element={<MiningProjects />}
        />

        <Route path="/media/news-events" element={<NewsEvents />} />
        <Route path="/media/press-releases" element={<PressRelease />} />
        <Route path="/media/speeches" element={<Speeches />} />
        <Route path="/media/general-documents" element={<GeneralDocuments />} />
        <Route path="/media/legal-documents" element={<LegalDocuments />} />
        <Route path="/media/reports" element={<Reports />} />
        <Route path="/media/news-events/:slug" element={<NewsDetail />} />
        <Route path="/media/press-releases/:slug" element={<NewsDetail />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route path="/tracking" element={<Tracking />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminTracking />} />

        <Route
          path="/contacts/ministry-contacts"
          element={<MinistryContacts />}
        />
        <Route path="/contacts/regional-offices" element={<RegionalOffices />} />
        <Route path="/contacts/feedback" element={<Feedback />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;