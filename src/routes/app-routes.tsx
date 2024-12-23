// import { Routes, Route } from 'react-router-dom';
// import SignUpPage from '@/components/pages/sign-up';

// <Routes>
//   <Route path="/signup" element={<SignUpPage />} />
// </Routes>

// app-routes.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "@/components/pages/sign-up";
import Home from "@/components/pages/home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;