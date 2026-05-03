import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LanguageSelect from "./pages/LanguageSelect";
import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import Chat from "./pages/Chat";
import SpeakLearn from "./pages/SpeakLearn";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* 🔥 LANGUAGE SHOULD BE PART OF ONBOARDING (NOT NORMAL PUBLIC) */}
        <Route
          path="/select-language"
          element={
            <ProtectedRoute>
              <LanguageSelect />
            </ProtectedRoute>
          }
        />

        {/* PROTECTED APP AREA */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lesson/:id"
          element={
            <ProtectedRoute>
              <Lesson />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route path="/speak" element={<SpeakLearn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;