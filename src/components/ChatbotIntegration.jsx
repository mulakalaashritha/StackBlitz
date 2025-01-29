import React from 'react';
import { Zap } from 'lucide-react';

function ChatbotIntegration() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-900 mb-2">Chatbot Configuration</h4>
        <form className="space-y-4">
          <div>
            <label htmlFor="botName" className="block text-sm font-medium text-gray-700">
              Chatbot Name
            </label>
            <input
              type="text"
              id="botName"
              className="input"
              placeholder="Enter chatbot name"
            />
          </div>
          <div>
            <label htmlFor="welcomeMessage" className="block text-sm font-medium text-gray-700">
              Welcome Message
            </label>
            <textarea
              id="welcomeMessage"
              rows={3}
              className="input"
              placeholder="Enter welcome message"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Configure Chatbot
          </button>
        </form>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Zap className="w-4 h-4 mr-2 text-purple-600" />
            24/7 customer support
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Zap className="w-4 h-4 mr-2 text-purple-600" />
            AI-powered responses
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Zap className="w-4 h-4 mr-2 text-purple-600" />
            Multi-language support
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatbotIntegration;