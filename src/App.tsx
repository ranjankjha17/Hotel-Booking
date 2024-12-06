import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import AdminDashboard from './pages/Admin/Dashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';
import HotelList from './pages/Hotels/HotelList';
import HotelDetails from './pages/Hotels/HotelDetails';
import Login from './pages/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hotels" element={<HotelList />} />
            <Route path="hotels/:id" element={<HotelDetails />} />
            <Route 
              path="admin" 
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="dashboard" 
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;