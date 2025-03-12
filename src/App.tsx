import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Publications } from './components/Publications';
import { Loader } from './components/hui'; 
import { Viewer } from './components/Viewer';
import { Research } from './components/Tools';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
        <Loader />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path= "/Tools" element ={<Research />}/>
          <Route path= "/publications" element={<Publications />} />
          <Route path= "/viewer" element={<Viewer/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;