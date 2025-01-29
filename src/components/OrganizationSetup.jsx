import React from 'react';
import { Star } from 'lucide-react';

function OrganizationSetup() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-900 mb-2">Organization Details</h4>
        <form className="space-y-4">
          <div>
            <label htmlFor="orgName" className="block text-sm font-medium text-gray-700">
              Organization Name
            </label>
            <input
              type="text"
              id="orgName"
              className="input"
              placeholder="Enter organization name"
            />
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select id="industry" className="input">
              <option>Select industry</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Education</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Create Organization
          </button>
        </form>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Benefits</h4>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 mr-2 text-purple-600" />
            Centralized team management
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 mr-2 text-purple-600" />
            Custom roles and permissions
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 mr-2 text-purple-600" />
            Analytics dashboard
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrganizationSetup;