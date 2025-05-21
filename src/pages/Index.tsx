
import React from 'react';
import DownloadWidget from '../components/DownloadWidget';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">VidyaGPT - Resources</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 max-w-md flex items-center justify-center">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Sure let me help you with the request.</h2>
          <DownloadWidget />
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-500">
          VidyaGPT | <a href="#" className="underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
