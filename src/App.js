import "./App.scss";
// import { FrontPage } from "./frontpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageReview } from "./components/imageReview";
import { Login } from "./components/login";
import CabinetCarousel from "./detail-pages/cabinets";
import TrimCarousel from "./detail-pages/Trim";
import KitchenCarousel from "./detail-pages/Kitchens";
import { Misc } from "./detail-pages/misc";
import { Allphotos } from "./detail-pages/allphotos";
import { NewFrontPage } from "./NewFrontPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewFrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imagereview" element={<ImageReview />} />
        <Route path="/cabinets" element={<CabinetCarousel />} />
        <Route path="/trim" element={<TrimCarousel />} />
        <Route path="/kitchens" element={<KitchenCarousel />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/allphotos" element={<Allphotos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
