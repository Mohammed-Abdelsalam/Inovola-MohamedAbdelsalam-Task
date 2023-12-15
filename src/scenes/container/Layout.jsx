import React from "react";

// React Router
import { Route, Routes } from "react-router-dom";

// Components
import Sidebar from "../global/Sidebar";
import Projects from "../projects/Projects";
import AvailableUnits from "../availableUnits/AvailableUnits";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row relative h-screen">
      <Sidebar />
      <main className="w-full h-full overflow-y-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/AvailableUnits" element={<AvailableUnits />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
