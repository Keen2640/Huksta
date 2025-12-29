
import React, { useState } from 'react';
import { Tab, Category } from './types';
import Navigation from './components/Navigation';
import SellFlow from './components/SellFlow';
import Profile from './components/Profile';
import Marketplace from './components/Marketplace';
import Messages from './components/Messages';
import ItemDetail from './components/ItemDetail';
import Login from './components/Login';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [viewingItem, setViewingItem] = useState<any>(null);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-[3rem] overflow-hidden min-h-[852px]">
          <Login onLogin={() => setIsAuthenticated(true)} />
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (activeTab === Tab.HOME && viewingItem) {
      return (
        <ItemDetail 
          item={viewingItem} 
          onBack={() => setViewingItem(null)} 
          onMessage={() => {
            setViewingItem(null);
            setActiveTab(Tab.MESSAGES);
          }}
        />
      );
    }

    switch (activeTab) {
      case Tab.HOME:
        return <Marketplace onSelectItem={setViewingItem} />;
      case Tab.MESSAGES:
        return <Messages />;
      case Tab.SELL:
        return (
          <SellFlow 
            category={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
            onCancel={() => {
              setSelectedCategory(null);
              setActiveTab(Tab.HOME);
            }}
          />
        );
      case Tab.PROFILE:
        return <Profile />;
      default:
        return <Marketplace onSelectItem={setViewingItem} />;
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="max-w-md mx-auto relative min-h-screen bg-white shadow-xl overflow-hidden">
        {renderContent()}
        <Navigation activeTab={activeTab} onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== Tab.SELL) setSelectedCategory(null);
          if (tab !== Tab.HOME) setViewingItem(null);
        }} />
      </div>
    </div>
  );
};

export default App;
