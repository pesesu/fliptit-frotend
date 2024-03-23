import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
      
    </>
  );
}

export default App;
