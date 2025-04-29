import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
<<<<<<< HEAD
import TeamsPage from './pages/TeamsPage';
=======
>>>>>>> 77f9098 (Made changes to XYZ)
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import BookingPage from './pages/BookingPage';
import SearchResultsPage from './pages/SearchResultsPage';
<<<<<<< HEAD
=======
import Profile from './pages/Profile';
>>>>>>> 77f9098 (Made changes to XYZ)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
<<<<<<< HEAD
        <Route path="teams" element={<TeamsPage />} />
=======
>>>>>>> 77f9098 (Made changes to XYZ)
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route 
          path="booking" 
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          } 
        />
<<<<<<< HEAD
=======
        <Route 
          path="profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
>>>>>>> 77f9098 (Made changes to XYZ)
      </Route>
    </Routes>
  );
}

export default App;