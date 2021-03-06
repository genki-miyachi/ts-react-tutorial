import React from 'react';
import './App.css';
import { AdmissionFeeCalculator } from './components/AdmissionFeeCalculator';

const App: React.FC = () => {
  return (
    <div className="main">
      <AdmissionFeeCalculator />
    </div>
  );
}

export default App;
