"use client";

import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useEffect } from "react";

import { loginUser } from "../lib/actions";
import PrimaryButton from "@/components/buttons/PrimaryButton";


const Login = () => {
  const [state, formAction] = useFormState(loginUser, null);
  const router = useRouter();

  const navigateToRegister = () => {
    router.push("/register");
  };

  useEffect(() => {
    if(state?.token) {
      document.cookie = `token=${state?.token}; HttpOnly'`
      router.push("/")
    }
  },[state])

  return (
    <main className="flex justify-center mt-[10%]">
      <section className="flex flex-col items-center border-2 border-[#A2D2FF] justify-center px-20 py-10 rounded-lg shadow-lg">
        <h2 className="uppercase text-[#3F37C9] text-2xl font-bold mb-20 underline">
          Login
        </h2>
        <form action={formAction}>
          <div className="flex justify-around mb-8 gap-[4vw]">
            <label className="text-[#4361EE] text-xl" htmlFor="username">
              Username
            </label>
            <input
              className="rounded-md px-1 py-1"
              type="text"
              name="username"
            />
          </div>
          <div className="flex justify-around mb-8 gap-[4vw]">
            <label className="text-[#4361EE] text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-1 py-1"
              type="text"
              name="password"
            />
          </div>
          <div className="flex justify-between mb-8 gap-[4vw]">
            {/* <PrimaryButton text="Login" bgColor="#4361EE" type="submit" /> */}
            <button
              type="submit"
              className={`bg-[#4361EE] px-5 py-2 rounded-lg text-white hover:text-gray-100 hover:bg-[#3F37C9]`}
            >
              Login
            </button>
            <PrimaryButton
              handleClick={navigateToRegister}
              text="Register Here!"
              bgColor="#4361EE"
            />
          </div>
        </form>
        <p className="text-[#F72585] text-lg mt-2"></p>
      </section>
    </main>
  );
};

export default Login;
