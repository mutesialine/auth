import { useNavigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

export const useAuthProtection = () => {
  const navigate = useNavigate();
  if (!isAuthenticated()) {
    return navigate("/login");
  }
  return isAuthenticated();
};

// export function useIsAuthenticated() {
//   const [isLoggedin, setIsLoggedIn] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (token && location.pathname === "/tote") {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//       navigate("/login");

//     }
//   }, [token, location]);
//   return { isLoggedin };
// }
