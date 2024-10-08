import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import WhitepaperSICK from './pages/whitepaper';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import CrateCreator from './pages/createcrate';
import CrateDetailPage from './pages/crates';
import ExploreCrate from './pages/explorecrate/ExploreCrate';
import Graphtest from './pages/graphtest';
import SickAi from './pages/sickai';
import SwapFunction from './pages/swap';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explorecrate" element={<ExploreCrate />} />
        <Route path="/whitepaper" element={<WhitepaperSICK />} />
        <Route path="/cratecreator" element={<CrateCreator />} />
        <Route path="/crates/:id" element={<CrateDetailPage />} />
        <Route path="/graphtest/:id" element={<Graphtest />} />   
        <Route path="/sai" element={<SickAi />} />
        <Route path="/swap" element={<SwapFunction />} />
        </Routes>
    </Router>
  );
}

export default App;