
import './App.css';
import { FrontPage } from './frontpage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ImageReview } from './components/imageReview';
function App() {
  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<FrontPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
