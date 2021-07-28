import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import ListPage from './components/listPage';
import HowItWorks from './components/HowItWorks'
import PropertyBar from './components/propertyBar';
import FrequentlyQA from './components/FrequentlyQA';

function App() {
  return (
    <div className="App">
      <Homepage />
      <ListPage />
      <PropertyBar />
      <HowItWorks />
      <FrequentlyQA />

    
    
    </div>
  );
}

export default App;
