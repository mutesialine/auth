import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupForm from "./components/form/SignupForm";
import LoginForm from "./components/form/LoginForm"

export default function App() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
