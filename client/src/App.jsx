import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./util/LoginForm";
import Home from "./pages/Home";
import Tote from "./pages/Tote";

export default function App() {
  return (
    <div className="w-full h-screen">
      <div className="max-w-7xl mx-auto w-full text-yellow-700">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/tote" element={<Tote />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
