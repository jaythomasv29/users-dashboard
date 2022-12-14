import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.component';
import Home from './pages/home/home.component';
import { AuthContext } from './context/AuthContext';
import Register from './pages/register/register.component';
import Users from './pages/users/users.component';
import Main from './pages/main/main.component';

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} 
          >
             <Route index element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>}/>
            <Route path="users" element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>}/>
          
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
