import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskRound as Flask, LineChart, Book, Home, PenTool as Tool } from 'lucide-react';


export function Navigation() {
  return (
    <nav className="bg-white shadow-lg fullscrean">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Flask className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">CrystalEvo</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" />
            <NavLink to="/Tools" icon={<Tool className="h-5 w-5" />} text="Research Tools" />
            <NavLink to="/viewer" icon={<LineChart className="h-5 w-5" />} text="3D Viewer" />
            <NavLink to="/publications" icon={<Book className="h-5 w-5" />} text="Publications" />
          
            

          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
}