import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-brand-red" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                  MealTimes
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-red focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/login"
              className="text-gray-700 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-4 bg-brand-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-orange transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/meals"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red"
            >
              Meals
            </Link>
            <Link
              to="/meal-plans"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red"
            >
              Plans
            </Link>
            <Link
              to="/onboarding"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red"
            >
              About
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-red"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}