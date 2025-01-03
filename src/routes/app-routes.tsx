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
import ComingSoon from "@/components/pages/coming-soon";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;