import React from 'react';
import { Users } from 'lucide-react';

function Registration() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-purple-900 mb-2">Quick Registration</h4>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Create a password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Create Account
          </button>
        </form>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-purple-600" />
            Secure authentication system
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-purple-600" />
            Profile customization
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-purple-600" />
            Team collaboration tools
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Registration;