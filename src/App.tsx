import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Star, Users, Zap, Shield } from 'lucide-react';
import Layout from './components/Layout';
import Registration from './components/Registration';
import OrganizationSetup from './components/OrganizationSetup';
import ChatbotIntegration from './components/ChatbotIntegration';
import WebsiteScraping from './components/WebsiteScraping';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'registration',
      title: 'User Registration',
      description: 'Seamless onboarding with secure authentication and profile management.',
      icon: Users,
      component: Registration
    },
    {
      id: 'organization',
      title: 'Organization Setup',
      description: 'Create and manage your organization with powerful administrative tools.',
      icon: Star,
      component: OrganizationSetup
    },
    {
      id: 'chatbot',
      title: 'Chatbot Integration',
      description: 'AI-powered chatbot for instant customer support and engagement.',
      icon: Zap,
      component: ChatbotIntegration
    },
    {
      id: 'scraping',
      title: 'Website Scraping',
      description: 'Extract and analyze data from websites with advanced scraping tools.',
      icon: Shield,
      component: WebsiteScraping
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  DataFlow
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {features.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveSection(feature.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === feature.id
                        ? 'text-purple-400'
                        : 'text-gray-400 hover:text-purple-400'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-b border-gray-800">
                {features.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      setActiveSection(feature.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === feature.id
                        ? 'text-purple-400 bg-gray-900'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-gray-900'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map(feature => {
                const isExpanded = expandedFeature === feature.id;
                const FeatureComponent = feature.component;
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className={`bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-900/50 rounded-lg">
                            <Icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {feature.title}
                          </h3>
                        </div>
                        <button
                          onClick={() =>
                            setExpandedFeature(isExpanded ? null : feature.id)
                          }
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        {feature.description}
                      </p>
                      {isExpanded && (
                        <div className="mt-4 border-t border-gray-800 pt-4">
                          <FeatureComponent />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-400">
              © 2024 DataFlow. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default App;