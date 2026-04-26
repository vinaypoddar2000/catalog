import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="app">
      {selectedItem ? (
        <DetailPage item={selectedItem} onBack={() => setSelectedItem(null)} />
      ) : (
        <HomePage onSelectItem={setSelectedItem} />
      )}
    </div>
  );
}

export default App;