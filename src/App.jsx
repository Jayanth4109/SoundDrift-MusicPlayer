import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Podcasts from "./pages/Podcasts";
import Bookmarks from "./pages/Bookmarks";
import AppLayout from "./components/AppLayout";
import MusicCard from "./components/MusicCard";
import MusicSection from "./components/MusicSection";

function App() {
  return (
    <Router>
      <div className="flex ">
        <div className="flex-1 p- bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={ <AppLayout><Home /></AppLayout> } />
            <Route path="/explore" element={<AppLayout><Explore /></AppLayout>} />
            <Route path="/trending" element={<AppLayout><Trending /></AppLayout>} />
            <Route path="/podcasts" element={<AppLayout><Podcasts /></AppLayout>} />
            <Route path="/bookmarks" element={<AppLayout><Bookmarks /></AppLayout>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
