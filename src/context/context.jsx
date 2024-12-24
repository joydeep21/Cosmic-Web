import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

function Provider({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const store = {
    isDrawerOpen,
    setIsDrawerOpen,
    showLogin,
    setShowLogin,
    showSignUp,
    setShowSignUp,
  };
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export { AuthContext, Provider };
