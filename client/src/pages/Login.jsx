import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");

  const handleData = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          ...data,
        }),
        headers: { "content-type": "application/json" },
      });
      const userData = await res.json();
      // console(userData)
      if (userData.user) {
        localStorage.setItem("token", userData.user);
        setMessage("successful logged in");
        navigate("/tote");
        reset();
      } else {
        setMessage(userData.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleData)}
      className="w-1/2 m-auto bg-white shadow-md p-12 mt-32 rounded-lg"
    >
      <h2 className="text-4xl font-bold">Login</h2>
      <div className="flex flex-col gap-2 pt-8">
        {message && (
          <label
            className={`${
              message === "successful logged in"
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
        className="px-8 py-3 bg-yellow-700 text-white rounded-full mt-6 cursor-pointer"
      >
        Login
      </button>
    </form>
  );
}
