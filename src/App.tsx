import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Profile } from './components/Profile';
import { Publications } from './components/Publications';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path= "/profile" element={<Profile />} />
          <Route path= "/publications" element={<Publications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;