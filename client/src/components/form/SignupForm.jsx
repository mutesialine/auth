import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit,formState: { errors }, reset  } = useForm();
  const [message, setMessage] = useState("");


  const handleData = async (data) => {
    console.log("hellooo")
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      const userData = await res.json();
      console.log(userData,"hereee")
      if (res.ok) {
        setMessage("Account created successfully");
        reset()
      }
       else {
        setMessage(userData.error.email);
      }
    } 
    catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleData)}
      className="w-1/2 m-auto bg-white shadow-md p-12 mt-32 rounded-lg"
    >
      <h2 className="text-4xl font-bold">Sign up</h2>
      <div className="flex flex-col gap-2 pt-8">
        {message && (
          <label
            className={`${
              message === "Account created successfully"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </label>
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="enter the email"
          {...register("email")}
          name="email"
          required
          className={`p-4 rounded-lg border outline-none ${
            errors.password ? "border-red-500" : ""
          }`}

        />
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <label>Password</label>
        <input
          type="password"
          placeholder="enter the password"
          {...register("password")}
          name="password"
          required
          className={`p-4 rounded-lg border outline-none ${
            errors.email ? "border-red-500" : ""
          }`}
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-green-500 rounded-full mt-6 cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}
