
import React, { useState } from "react";
import { FileText } from "lucide-react";
import { toast } from "sonner";

const DownloadWidget = () => {
  const [loading, setLoading] = useState(false);

  const handleApply = () => {
    setLoading(true);
    
    // Simulate a brief delay before redirecting
    setTimeout(() => {
      setLoading(false);
      
      // Open the application website in a new tab
      window.open("https://www.extraaedge.ai", "_blank");
    }, 1000);
  };

  return (
    <div className="rounded-lg bg-gray-50 p-4 my-4 max-w-md">
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Start Application Form</h3>
          <p className="text-gray-600 text-sm">
            Start your application process by filing the form & kicking off your journey towards a great carrer outcome.
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="140" 
              height="180" 
              viewBox="0 0 140 180" 
              fill="none"
              className="w-28 h-36 object-contain rounded hover:animate-none animate-pulse"
            >
              {/* Form background with purple gradient */}
              <rect width="140" height="180" rx="10" fill="#E5DEFF"/>
              <path fill="#7E69AB" d="M0 10C0 4.477 4.477 0 10 0h120c5.523 0 10 4.477 10 10v170c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10z"/>
              
              {/* White paper sheet */}
              <rect x="10" y="10" width="120" height="160" rx="6" fill="white" stroke="#7E69AB" strokeWidth="1"/>
              
              {/* Form lines */}
              <path d="M30 40h80M30 35h50M25 160h90" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round"/>
              
              {/* College/Verification badge */}
              <path d="M70 25 A12 12 0 1 0 70 1 A12 12 0 1 0 70 25 Z" fill="#D6BCFA"/>
              <text x="64" y="19" fontFamily="Arial" fontSize="14" fill="#7E69AB" fontWeight="bold">V</text>
              
              {/* Form fields */}
              <rect x="25" y="50" width="90" height="30" rx="4" fill="#9b87f5" opacity="0.2"/>
              <path d="M30 70h80M30 60h70" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Form text area */}
              <rect x="25" y="90" width="90" height="60" rx="4" fill="#D6BCFA" opacity="0.3"/>
              <path d="M40 110h60M40 120h50M40 130h40" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Checkmark/completion element */}
              <circle cx="110" cy="110" r="10" fill="#9b87f5" opacity="0.6"/>
              <path d="M105 110l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Arrow pointing to form indicating action */}
              <path d="M35 145 L35 95 M35 145 L45 135 M35 145 L25 135" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <button
        onClick={handleApply}
        disabled={loading}
        className="mt-4 flex w-full justify-center items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors transform hover:scale-[1.02] duration-200"
      >
        {loading ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Redirecting...
          </div>
        ) : (
          <>
            <FileText className="mr-2 h-4 w-4" />
            Apply Now
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadWidget;
