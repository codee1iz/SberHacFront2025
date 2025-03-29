import React from 'react';
import { ArrowRight, Zap, Database, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 feature-card">
        <div className="flex items-center justify-center">
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white text-center">{title}</h3>
        <p className="mt-2 text-blue-100 text-center">{description}</p>
      </div>
    );
  }

  return (
    <div className="fullscreen-container relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Advanced Co-Crystal</span>
            <span className="block text-blue-200">Evolutionary Optimization</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-12 md:text-xl md:max-w-3xl">
            Ускорьте свои исследования с помощью нашей передовой платформы для проектирования и оптимизации монокристаллов. Используйте эволюционные алгоритмы для поиска новых материалов.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/Tools"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Начать работу
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Блок "Хакатон" и логотип */}
      <div className="logo-section">
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Хакатон
        </h2>
        <img 
          src="https://static.tildacdn.com/tild3265-3364-4830-b934-303662633736/__.png" 
          alt="Логотип"
          className="w-auto h-1 md:h-20 lg:h-24"
        />
      </div>

      {/* Блок с FeatureCard */}
      <div className="feature-card-section">
        <FeatureCard
          icon={<Zap className="h-8 w-8 text-blue-400" />}
          title="Быстрые вычисления"
          description="Используйте передовые алгоритмы для быстрой оптимизации и моделирования сокристаллических структур."
        />
        <FeatureCard
          icon={<Database className="h-8 w-8 text-blue-400" />}
          title="Управление данными"
          description="Надежно храните данные ваших исследований, моделирования и результаты и управляйте ими."
        />
        <FeatureCard
          icon={<Share2 className="h-8 w-8 text-blue-400" />}
          title="Сотрудничество"
          description="Делитесь своими открытиями и сотрудничайте с исследователями по всему миру."
        />
      </div>
    </div>
  );
};
