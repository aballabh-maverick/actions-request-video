
import React, { useState } from "react";
import { Phone, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DownloadWidget = () => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleRequestCallback = () => {
    setDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!date || !time) {
      toast.error("Please select both date and time for your callback");
      return;
    }

    setLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      setDialogOpen(false);
      
      // Show confirmation toast
      const formattedDate = format(date, "EEEE, MMMM do, yyyy");
      toast.success(
        `You have selected a call back on ${formattedDate} at ${time}. The team will get back to you soon. We look forward to speaking to you.`,
        { duration: 5000 }
      );
      
      // Reset selected values
      setDate(undefined);
      setTime("");
    }, 1000);
  };

  return (
    <>
      <div className="rounded-lg bg-gray-50 p-4 my-4 max-w-md">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Request a Callback</h3>
            <p className="text-gray-600 text-sm">
              Request a call back from our admission team to guide you in a more detailed way. We shall call you on your number provided. Select a time now.
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
                {/* Background with light purple gradient */}
                <rect width="140" height="180" rx="10" fill="#E5DEFF"/>
                <path fill="#7E69AB" d="M0 10C0 4.477 4.477 0 10 0h120c5.523 0 10 4.477 10 10v170c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10z"/>
                
                {/* White calendar base */}
                <rect x="15" y="20" width="110" height="140" rx="6" fill="white" stroke="#7E69AB" strokeWidth="1"/>
                
                {/* Calendar header */}
                <rect x="15" y="20" width="110" height="30" rx="6" fill="#9b87f5" fillOpacity="0.7"/>
                <text x="35" y="40" fontFamily="Arial" fontSize="14" fill="white" fontWeight="bold">CALLBACK</text>
                
                {/* Calendar grid lines */}
                <path d="M15 50h110M15 75h110M15 100h110M15 125h110M40 50v110M65 50v110M90 50v110M115 50v110" 
                      stroke="#D6BCFA" strokeWidth="1" strokeLinecap="round"/>
                
                {/* Phone icon */}
                <circle cx="105" cy="40" r="10" fill="white"/>
                <path d="M101 38c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5 1 2.5 2.5v8c0 1.5-1 2.5-2.5 2.5h-3c-1.5 0-2.5-1-2.5-2.5v-8z" fill="#9b87f5"/>
                <path d="M103.5 44h3M105 37v1" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                
                {/* Selected date highlight */}
                <rect x="40" y="75" width="25" height="25" rx="4" fill="#9b87f5" fillOpacity="0.3"/>
                <circle cx="52.5" cy="87.5" r="8" fill="#9b87f5" fillOpacity="0.6"/>
                <text x="49" y="91" fontFamily="Arial" fontSize="10" fill="#7E69AB" fontWeight="bold">15</text>
                
                {/* Time indicator */}
                <rect x="25" y="130" width="90" height="20" rx="4" fill="#D6BCFA" fillOpacity="0.3"/>
                <path d="M35 140h70" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="55" cy="140" r="5" fill="#9b87f5"/>
                
                {/* Clock icon */}
                <circle cx="30" cy="140" r="6" fill="#9b87f5" fillOpacity="0.6"/>
                <path d="M30 136v4h3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Checkmark for confirmation */}
                <circle cx="115" cy="155" r="10" fill="#9b87f5" opacity="0.8"/>
                <path d="M110 155l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <button
          onClick={handleRequestCallback}
          disabled={loading}
          className="mt-4 flex w-full justify-center items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors transform hover:scale-[1.02] duration-200"
        >
          {loading ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </div>
          ) : (
            <>
              <Phone className="mr-2 h-4 w-4" />
              Request Now
            </>
          )}
        </button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule Your Callback</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Select Date
              </label>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="p-3 pointer-events-auto w-full"
                disabled={(date) => {
                  // Disable past dates and weekend days (Saturday and Sunday)
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const day = date.getDay();
                  return date < today || day === 0 || day === 6;
                }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Select Time
              </label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={!date || !time || loading}
              className="flex items-center justify-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors transform hover:scale-[1.02] duration-200"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <>
                  <Calendar className="mr-2 h-4 w-4" />
                  Confirm Callback
                </>
              )}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DownloadWidget;
