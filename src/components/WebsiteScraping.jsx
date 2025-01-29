import React from 'react';
import { Shield } from 'lucide-react';

function WebsiteScraping() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-900 mb-2">Website Scraping</h4>
        <form className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Website URL
            </label>
            <input
              type="url"
              id="url"
              className="input"
              placeholder="Enter website URL"
            />
          </div>
          <div>
            <label htmlFor="selector" className="block text-sm font-medium text-gray-700">
              CSS Selector
            </label>
            <input
              type="text"
              id="selector"
              className="input"
              placeholder="Enter CSS selector"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Start Scraping
          </button>
        </form>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2 text-purple-600" />
            Automated data extraction
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2 text-purple-600" />
            Custom scraping rules
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2 text-purple-600" />
            Export to multiple formats
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WebsiteScraping;