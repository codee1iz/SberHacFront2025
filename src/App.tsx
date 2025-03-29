import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Publications } from './components/Publications';
import { Viewer } from './components/Viewer';
import { Research } from './components/Tools';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
        
        <Routes>
          <Route path="/" element={<HomePage />} />          {/* Главная страница */}
          <Route path="/publications" element={<Publications />} />  {/* Публикации */}
          <Route path="/viewer" element={<Viewer />} />      {/* Вьювер */}
          <Route path="/tools" element={<Research />} />     {/* Инструменты */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;