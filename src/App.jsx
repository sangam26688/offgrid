import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import GlassNav from "./components/GlassNav";
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
import Footer from "./components/Footer.jsx"; // Footer bhi add kar sakte ho

const App = () => {
  return (
    <BrowserRouter> {/* 👉 BrowserRouter ko sabse upar kar diya */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar ab router ke andar hai, toh yahan Link / routing perfectly kaam karegi */}
        <GlassNav brand="OFFGRID" />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/new-in" element={<NewIn />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/fragrance" element={<Fragrance />} />
            <Route path="/jewellery-watches" element={<JewelryWatchesPage />} />
            <Route path="/decor" element={<DecorLifestylePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;