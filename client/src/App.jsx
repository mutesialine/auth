import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

// import ProtectedRoute from "./components/ProtectedRoute";
// import { IsAuthenticated } from "./util/auth";
import Tote from "./pages/Tote";
import { useIsAuthenticated } from "./util/auth";

export default function App() {
  const { isLoggedin } = useIsAuthenticated();

  console.log(isLoggedin, "valueeeee");
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto w-full text-yellow-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tote" element={<Tote />} />
        </Routes>
      </div>
    </div>
  );
}
