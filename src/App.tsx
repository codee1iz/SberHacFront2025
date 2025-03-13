import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
<<<<<<< HEAD
import { Publications } from './components/Publications';
import { Loader } from './components/hui'; 
import { Viewer } from './components/Viewer';
import { Research } from './components/Tools';
=======
import { Profile } from './components/Profile';
import { Publications } from './components/Publications';
>>>>>>> 12b7358c0f0675c5b1171ec3841eeb423361b4dc

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
<<<<<<< HEAD
        <Loader />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path= "/Tools" element ={<Research />}/>
          <Route path= "/publications" element={<Publications />} />
          <Route path= "/viewer" element={<Viewer/>}/>
          
=======
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path= "/profile" element={<Profile />} />
          <Route path= "/publications" element={<Publications />} />
>>>>>>> 12b7358c0f0675c5b1171ec3841eeb423361b4dc
        </Routes>
      </div>
    </Router>
  );
}

export default App;