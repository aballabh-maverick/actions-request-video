
import React from 'react';

interface ChatMessageProps {
  content: React.ReactNode;
  isBot?: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isBot = false, timestamp }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] ${isBot ? 'bg-white border border-gray-200' : 'bg-blue-600 text-white'} rounded-lg p-3 shadow`}>
        <div className="text-sm">{content}</div>
        {timestamp && (
          <div className={`text-xs mt-1 text-right ${isBot ? 'text-gray-500' : 'text-blue-200'}`}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
