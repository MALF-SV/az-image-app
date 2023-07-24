import React from 'react';
import './app-styles.css';

import ImagesGetter from './features/ImagesGetter';

function App() {
  return (
    <div className="app">
      <header className="header">Get Keanu images!</header>
      <div className="content">
        <ImagesGetter />
      </div>
    </div>
  );
}

export default App;
