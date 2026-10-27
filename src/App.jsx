import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import GlassNav from "./components/nav/GlassNav.jsx";
import Home from "./pages/home/Home.jsx";
import Gifts from "./pages/gifts/Gifts.jsx";
import Travel from "./pages/travel/Travel.jsx";
import Fragrance from "./pages/fragrances-makeup/Fragrances.jsx";
import DecorLifestylePage from "./pages/decor-lifestyle/Decor.jsx";
import Kids from "./pages/kids/Kids.jsx";
import Men from "./pages/men/Men.jsx";
import Women from "./pages/women/Women.jsx";
import NewIn from "./pages/new/NewIn.jsx";
import JewelryWatchesPage from "./pages/luxury/JewelryWatchesPage.jsx";
import Footer from "./components/footer/Footer.jsx"; // Footer bhi add kar sakte ho
import PrivacyPolicyPage from "./pages/privacy/PrivacyPolicyPage.jsx";
import ClientCarePage from "./components/footer/ClientCareData.jsx";

const App = () => {
  return (
    <BrowserRouter> {/* 👉 BrowserRouter ko sabse upar kar diya */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar ab router ke andar hai, toh yahan Link / routing perfectly kaam karegi */}
        <GlassNav brand="OFFGRID" />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gifts" element={<Gifts />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/New-In" element={<NewIn />} />
            <Route path="/Travel" element={<Travel />} />
            <Route path="/Fragrance" element={<Fragrance />} />
            <Route path="/luxury" element={<JewelryWatchesPage />} />
            <Route path="/decor" element={<DecorLifestylePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/client" element={<ClientCarePage />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;