import React from "react";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/Index";
import Layout from "../components/Layout";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* <Route path="" element={<TodoList />} />
            <Route path="" element={<TrafficLights />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
