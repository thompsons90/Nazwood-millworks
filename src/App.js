
import './App.css';
import { FrontPage } from './frontpage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ImageReview } from './components/imageReview';
import { Login } from './components/login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<FrontPage />} />
   <Route path="/login" element={<Login />} />
   <Route path="/imagereview" element={<ImageReview />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
