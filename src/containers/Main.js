import React from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <Splash theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
