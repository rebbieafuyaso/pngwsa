// components/AuthGuard.jsx - just checks login
import { useEffect, useState } from "react";
import { api } from "../api";

export function AuthGuard({ children }) {
  const [checking, setChecking] = useState(true);
  const [hasJwt, setHasJwt] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    setHasJwt(!!jwt);
    setChecking(false);
  }, []);

  if (checking) return <div>Loading...</div>;
  if (!hasJwt) return <Navigate to='/login' replace />;
  return children;
}

// components/OnboardingGuard.jsx - checks onboarding status
export function OnboardingGuard({ children }) {
  const [checking, setChecking] = useState(true);
  const [isOnboarded, setIsOnboarded] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      const jwt = localStorage.getItem('jwt');
      try {
        const response = await api.get('/auth/me', {
          headers: { Authorization: `Bearer ${jwt}` }
        });
        setIsOnboarded(response.data.member?.isOnboarded || false);
      } catch (error) {
        console.error(error);
      } finally {
        setChecking(false);
      }
    };
    checkOnboarding();
  }, []);

  if (checking) return <div>Loading...</div>;
  if (!isOnboarded) return <Navigate to='/onboarding' replace />;
  return children;
}