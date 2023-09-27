import { Link } from "react-router-dom"

export default function Navbar (){
  return (
    <div className="flex justify-between py-6 px-24">
        <a href="/" className="text-4xl">A</a>
        <div className="flex items-center  gap-x-6">
            <Link className="text-lg" to="login" href="">LOG IN</Link>
            <Link className="py-3 px-6 bg-yellow-500 rounded-full text-base" to="signup">SIGN UP</Link>
        </div>
    </div>
  )
}
