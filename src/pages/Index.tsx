
import React from 'react';
import ChatMessage from '../components/ChatMessage';
import DownloadWidget from '../components/DownloadWidget';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">VidyaGPT - Co-pilot</h1>
          <div className="flex space-x-3">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </button>
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 max-w-3xl">
        <div className="chat-container bg-gray-50 rounded-lg shadow-lg p-4 h-[calc(100vh-180px)] overflow-y-auto flex flex-col">
          <div className="chat-messages flex-1">
            <ChatMessage 
              isBot={true} 
              content={
                <div>
                  <p className="mb-2">🎓 Accreditations and Recognitions: The B.Tech programs are accredited by reputable bodies, ensuring the quality and recognition of the degrees.</p>
                  <p>Let me know if you have any other questions! I'm here to assist you. 😊</p>
                </div>
              } 
            />
            
            <ChatMessage 
              isBot={true} 
              content={
                <div>
                  <p>Sure, let me help you!</p>
                  <DownloadWidget />
                </div>
              } 
              timestamp="11:00 AM"
            />
          </div>
          
          <div className="chat-input mt-4 sticky bottom-0">
            <div className="flex items-center border border-gray-300 bg-white rounded-full px-4 py-2">
              <input 
                type="text" 
                placeholder="Reply here" 
                className="flex-1 outline-none text-gray-700"
                disabled
              />
              <button className="text-gray-500 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="quick-access mt-4 flex space-x-2 overflow-x-auto pb-2">
          <button className="bg-white px-4 py-2 rounded-full text-gray-700 whitespace-nowrap border border-gray-300 hover:bg-gray-50">
            Major courses information
          </button>
          <button className="bg-white px-4 py-2 rounded-full text-gray-700 whitespace-nowrap border border-gray-300 hover:bg-gray-50">
            Fees Structure
          </button>
          <button className="bg-white px-4 py-2 rounded-full text-gray-700 whitespace-nowrap border border-gray-300 hover:bg-gray-50">
            Course Duration
          </button>
        </div>
      </main>
      
      <footer className="bg-white p-4 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-500">
          ChatBot by VidyaGPT | <a href="#" className="underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
