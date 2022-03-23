// import * as FirestoreService from "./services/firebase";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "@screens/account/LoginScreen";
import SignUpScreen from "@screens/account/SignUpScreen";
import Dashboard from "@screens/dashboard/Dashboard";
import PrivateRoute from "@routes/PrivateRoute";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
