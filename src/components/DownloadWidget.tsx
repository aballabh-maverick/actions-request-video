
import React, { useState } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";

const DownloadWidget = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setDownloading(false);
      
      // Show success toast
      toast.success(
        "Sure! Here's the latest brochure with all the details about our programs, campus, and admissions. Hope this gives a detailed overview of the institute's admission process & career options? Good Luck!"
      );
      
      // Simulate file download
      const link = document.createElement("a");
      link.href = "#"; // In a real app, this would point to your actual PDF file
      link.setAttribute("download", "institute_brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="rounded-lg bg-gray-50 p-4 my-4 max-w-md">
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">Download Brochure</h3>
          <p className="text-gray-600 text-sm">
            Access our brochure for detailed information about our programs.
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop"
              alt="Education brochure preview" 
              className="w-16 h-20 object-cover rounded"
              onError={(e) => {
                // Fallback to a simple illustration if the image fails to load
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='80' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'%3E%3C/path%3E%3Cpolyline points='14 2 14 8 20 8'%3E%3C/polyline%3E%3Cline x1='16' y1='13' x2='8' y2='13'%3E%3C/line%3E%3Cline x1='16' y1='17' x2='8' y2='17'%3E%3C/line%3E%3Cpolyline points='10 9 9 9 8 9'%3E%3C/polyline%3E%3C/svg%3E";
                target.className = "w-16 h-20 object-contain";
              }}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="mt-4 flex w-full justify-center items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
      >
        {downloading ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Downloading...
          </div>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Download
          </>
        )}
      </button>
    </div>
  );
};

export default DownloadWidget;
