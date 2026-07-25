import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-gray-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Placeholder sections to be populated in upcoming steps */}
      </main>
    </div>
  );
}

export default App;
