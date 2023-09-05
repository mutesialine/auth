

export default function Navbar (){
  return (
    <div className="flex justify-between py-6 px-24 bg-teal-200">
        <a href="/" className="text-4xl">A</a>
        <div className="flex  gap-x-6 text-xl">
            <a href="">Login</a>
            <a href="">Sign up</a>
            <a>profile</a>
        </div>
    </div>
  )
}
