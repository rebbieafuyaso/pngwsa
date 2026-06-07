import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Members from "./pages/Members"
import BlogDetail from "./pages/BlogDetail";
import NewsBlogs from "./pages/NewsBlogs";
import ContactPage from "./pages/ContactPage";
import ForgetPassword from "./pages/ForgetPassword";
import CreateAccount from "./pages/CreateAccount";
//import { ProtectedRoute } from "./hooks/ProtectedRoute";
import ConfirmEmail from "./pages/ConfirmEmail";
import LogIn  from "./pages/Login";
import OnboardingPage from './pages/OnboardingPage';
import Dashboard from './pages/Dashboard';
import { AuthGuard, OnboardingGuard } from "./hooks/ProtectedRoute";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/members" element={<Members />} />
        <Route path="/news" element={<NewsBlogs />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Blog Details */}
        <Route path="/details/:slug" element={<BlogDetail />} />

        {/* Authentication routes */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/account" element={<CreateAccount />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        <Route path="/confirmation-page" element={<ConfirmEmail />} />
        
        {/* Protected route - only after email confirmation */}
        <Route path="/onboarding" element={
          <AuthGuard>
            <OnboardingPage />
          </AuthGuard>
        } />

        <Route path="/dashboard" element={
          <AuthGuard>
            <OnboardingGuard>
              <Dashboard />
            </OnboardingGuard>
          </AuthGuard>
        } />
      </Routes>
    </BrowserRouter>
  )
}
export default App;