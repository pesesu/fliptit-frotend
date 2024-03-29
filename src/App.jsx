import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import SearchResultPage from "./pages/SearchResultsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/search-results" element={<SearchResultPage />} />
      </Routes>
      
    </>
  );
}

export default App;
