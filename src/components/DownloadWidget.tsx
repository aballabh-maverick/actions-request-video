
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
          <div className="bg-gray-200 rounded-full p-4">
            <img 
              src="/lovable-uploads/cca82697-20aa-4e37-9a3c-f6a80cb9aa80.png" 
              alt="Illustration" 
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback to a simple illustration if the image fails to load
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'%3E%3C/path%3E%3Cpolyline points='7 10 12 15 17 10'%3E%3C/polyline%3E%3Cline x1='12' y1='15' x2='12' y2='3'%3E%3C/line%3E%3C/svg%3E";
                target.className = "w-16 h-16";
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
