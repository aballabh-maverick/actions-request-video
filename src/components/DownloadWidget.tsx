
import React, { useState, useRef } from "react";
import { Play, Pause, Maximize, Minimize } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DownloadWidget = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  // Sample video path - this can be replaced with an uploaded video
  const videoSrc = "/sample-video.mp4";
  
  const handlePlayVideo = () => {
    setDialogOpen(true);
  };
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!isFullscreen) {
        if (videoContainerRef.current.requestFullscreen) {
          videoContainerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    toast.success("Video completed! Click 'Continue' to proceed.", { duration: 5000 });
  };
  
  const handleContinue = () => {
    setDialogOpen(false);
    toast.success("Thank you for watching! Your journey with us continues.", { duration: 3000 });
  };
  
  // Listen for fullscreen change events
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <div className="rounded-lg bg-gray-50 p-4 my-4 max-w-md">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Watch the Institute Video</h3>
            <p className="text-gray-600 text-sm">
              The video will cover the details about the institute helping you make the right career decision.
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <div 
              className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={handlePlayVideo}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="140" 
                height="180" 
                viewBox="0 0 140 180" 
                fill="none"
                className="w-28 h-36 object-contain rounded hover:animate-none animate-pulse"
              >
                {/* Video thumbnail background with gradient */}
                <rect width="140" height="180" rx="10" fill="#1A1F2C"/>
                
                {/* Video player frame */}
                <rect x="10" y="10" width="120" height="120" rx="4" fill="#9b87f5" opacity="0.8"/>
                
                {/* Video content placeholder - abstract campus scene */}
                <rect x="15" y="15" width="110" height="110" rx="2" fill="#D6BCFA" opacity="0.3"/>
                <path d="M15 60h110M55 15v110M85 15v110" stroke="#7E69AB" strokeWidth="0.5" opacity="0.7"/>
                
                {/* Buildings/campus silhouettes */}
                <path d="M25 90V60h15v-10h10v-15h5v15h10v10h15v30z" fill="#7E69AB" opacity="0.8"/>
                <path d="M95 90V40h20v50z" fill="#7E69AB" opacity="0.6"/>
                <rect x="65" y="65" width="20" height="25" fill="#7E69AB" opacity="0.7"/>
                <rect x="35" y="75" width="10" height="15" fill="#9b87f5" opacity="0.9"/>
                
                {/* Play button overlay */}
                <circle cx="70" cy="70" r="20" fill="#1A1F2C" fillOpacity="0.7"/>
                <path d="M65 58l15 12-15 12z" fill="#9b87f5"/>
                
                {/* Video title and info */}
                <rect x="10" y="140" width="120" height="30" rx="4" fill="#7E69AB" opacity="0.2"/>
                <text x="20" y="155" fontFamily="Arial" fontSize="10" fill="white" fontWeight="bold">INSTITUTE OVERVIEW</text>
                <text x="20" y="165" fontFamily="Arial" fontSize="8" fill="white" opacity="0.7">Learn about our programs</text>
                
                {/* Video duration */}
                <rect x="100" y="100" width="20" height="10" rx="5" fill="#1A1F2C" fillOpacity="0.8"/>
                <text x="103" y="108" fontFamily="Arial" fontSize="7" fill="white">3:45</text>
              </svg>
            </div>
          </div>
        </div>
        <button
          onClick={handlePlayVideo}
          className="mt-4 flex w-full justify-center items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors transform hover:scale-[1.02] duration-200"
        >
          <Play className="mr-2 h-4 w-4" />
          Watch Now
        </button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-4xl p-0 bg-gray-900 border-gray-800">
          <div ref={videoContainerRef} className="relative w-full">
            <video
              ref={videoRef}
              className="w-full max-h-[70vh] object-contain"
              src={videoSrc}
              onEnded={handleVideoEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-3 bg-black bg-opacity-50">
              <button 
                onClick={togglePlay} 
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
              </button>
              <button 
                onClick={toggleFullscreen} 
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isFullscreen ? <Minimize className="h-5 w-5 text-white" /> : <Maximize className="h-5 w-5 text-white" />}
              </button>
            </div>
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold mb-2">Institute Overview</h3>
            <p className="text-gray-600 mb-4">
              Learn about our programs, facilities, and why our institute is the right choice for your career growth.
            </p>
            <Button 
              onClick={handleContinue} 
              className="w-full"
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DownloadWidget;
