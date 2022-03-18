// import * as FirestoreService from "./services/firebase";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import LoginScreen from "@screens/account/LoginScreen";
import SignUpScreen from "@screens/account/SignUpScreen";
import Dashboard from "@screens/dashboard/Dashboard";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}
