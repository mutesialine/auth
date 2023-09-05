export default function loginForm  ()  {
  return (
    <div className="grid">.
    <form className='w-[500px] p-12 bg-teal-100 mx-auto mt-32 flex flex-col gap-y-8'>
        <input placeholder='username/email' className="w-full rounded-lg px-12 py-4 border shadow-sm outline-none placeholder:font-sans placeholder:text-base"/>
        <input placeholder='password' className="w-full rounded-lg px-12 py-4  border shadow-sm outline-none placeholder:font-sans placeholder:text-base"/>
        <button className='p-2 bg-teal-200'>log in</button>
    </form>
    </div>
  )
}


