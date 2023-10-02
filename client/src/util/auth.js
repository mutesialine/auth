import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";

export const IsAuthenticated = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    return navigate("/login");
  }
  // return redirect("/login");
  return null;
};

// export const useAuthProtection = () => {
//   if (!isAuthenticated()) {
//     // console.log(redirect, "redirect redirect red");
//     return redirect("/login");
//   }
//   // return isAuthenticated();
// };
export function useIsAuthenticated() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && location.pathname === "/tote") {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [token, location]);
  return { isLoggedin };
}
