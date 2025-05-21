
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
      <div className="rounded-lg bg-gray-50 p-4 my-4 w-full max-w-4xl mx-auto">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Watch the Institute Video</h3>
          
          <div 
            className="relative w-full cursor-pointer group"
            onClick={handlePlayVideo}
          >
            <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 9" 
                className="w-full h-full"
              >
                {/* Video thumbnail background with gradient */}
                <rect width="16" height="9" fill="#1A1F2C"/>
                
                {/* Video content placeholder - abstract campus scene */}
                <rect x="0" y="0" width="16" height="9" fill="#D6BCFA" opacity="0.2"/>
                <path d="M0 4.5h16M8 0v9" stroke="#7E69AB" strokeWidth="0.05" opacity="0.4"/>
                
                {/* Buildings/campus silhouettes */}
                <path d="M2 7V3h2V1.5h1V0.5h0.5v1h1v1.5h2v4z" fill="#7E69AB" opacity="0.7"/>
                <path d="M10 7V2h3v5z" fill="#7E69AB" opacity="0.5"/>
                <rect x="6" y="4" width="2" height="3" fill="#7E69AB" opacity="0.6"/>
                <rect x="3" y="5" width="1" height="2" fill="#9b87f5" opacity="0.8"/>
              </svg>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-5 transform transition-transform group-hover:scale-110">
                  <Play size={48} className="text-white" />
                </div>
              </div>
              
              {/* Video duration */}
              <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-xs">
                3:45
              </div>
            </div>
          </div>
          
          <button
            onClick={handlePlayVideo}
            className="mt-4 flex w-full justify-center items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors transform hover:scale-[1.02] duration-200"
          >
            Continue with VidyaGPT
          </button>
        </div>
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
