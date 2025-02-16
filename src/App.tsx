import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Meals from './pages/Meals';
import About from './pages/About';
import ChefProfile from './pages/ChefProfile';
import MealPlans from './pages/MealPlans';
import OrderTracking from './pages/OrderTracking';
import CorporateAccount from './pages/CorporateAccount';
import Nutrition from './pages/Nutrition';
import Events from './pages/Events';
import Support from './pages/Support';
import ChefApplication from './pages/ChefApplication';
import Rewards from './pages/Rewards';
import Feedback from './pages/Feedback';
import OnboardingGuide from './pages/OnboardingGuide';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/meals" element={<Meals />} />
              <Route path="/about" element={<About />} />
              <Route path="/chef/:id" element={<ChefProfile />} />
              <Route path="/meal-plans" element={<MealPlans />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/corporate-account" element={<CorporateAccount />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/events" element={<Events />} />
              <Route path="/support" element={<Support />} />
              <Route path="/chef-application" element={<ChefApplication />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/onboarding" element={<OnboardingGuide />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;