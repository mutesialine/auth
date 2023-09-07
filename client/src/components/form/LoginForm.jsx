export default function loginForm  ()  {
  return (
    <form className="w-1/2 m-auto bg-white shadow-md p-12 mt-32 rounded-lg">
    <h2 className='text-4xl font-bold'>Login</h2>
    <div className="flex flex-col gap-2 pt-8">
    <label>Email</label>
    <input type='email' placeholder='enter the email' name="email" required className="p-4 rounded-lg border outline-none"/>
    </div>
    <div className="flex flex-col gap-2 pt-2">
    <label>Password</label>
    <input type='password' placeholder='enter the password' name="password" required className="p-4 rounded-lg border outline-none"/>
    </div>
    <button className="px-8 py-3 bg-green-500 rounded-full mt-6 cursor-pointer">Login</button>
   </form>
  )
}


