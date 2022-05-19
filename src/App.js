import "./App.scss";
// import { FrontPage } from "./frontpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageReview } from "./components/imageReview";
import { Login } from "./components/login";
import { Cabinets } from "./detail-pages/cabinets";
import { Trim } from "./detail-pages/Trim";
import { Kitchens } from "./detail-pages/Kitchens";
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
        <Route path="/cabinets" element={<Cabinets />} />
        <Route path="/trim" element={<Trim />} />
        <Route path="/kitchens" element={<Kitchens />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/allphotos" element={<Allphotos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
