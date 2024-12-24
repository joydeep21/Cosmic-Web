import { useContext } from "react";
import { AuthContext } from "../context/context";

function useAuthContext() {
  return useContext(AuthContext);
}

export default useAuthContext;
