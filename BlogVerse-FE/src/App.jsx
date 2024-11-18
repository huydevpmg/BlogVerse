/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import { Toaster } from "./../node_modules/react-hot-toast/src/components/toaster";
import { useEffect } from "react";
import { useAuthStore } from "./store/AuthStore";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import EmailVerificationPage from "./pages/Verification/EmailVerificationPage";
import ForgotPasswordPage from "./pages/Verification/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Verification/ResetPasswordPage";
import HomePage from "./pages/Home/HomePage";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};
function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route path="/home-test" element={<HomePage />} />
        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
