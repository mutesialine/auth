import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  console.log(handleLogout);

  return (
    <div className="flex justify-between py-6 px-24">
      <Link to="/" className="text-4xl">
        A
      </Link>
      <div className="flex items-center gap-x-6">
        <Link className="text-lg" to="/login">
          LOG IN
        </Link>
        <Link
          className="py-3 px-6 bg-yellow-500 rounded-full text-base"
          to="/signup"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}
