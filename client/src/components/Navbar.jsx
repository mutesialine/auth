import { Link } from "react-router-dom"

export default function Navbar (){
  return (
    <div className="flex justify-between py-6 px-24">
        <a href="/" className="text-4xl">A</a>
        <div className="flex  gap-x-6 text-xl">
            <Link to="login" href="">Login</Link>
            <Link to="signup">Sign up</Link>
            <Link>Profile</Link>
        </div>
    </div>
  )
}
