'use client'

import {useFormState} from "react-dom";

import { createUser } from "../lib/actions";
import RegisterButton from "@/components/buttons/register-form-button";


export default function Register() {
    const [state, formAction] = useFormState(createUser, {username: "", password: ""})
    return (
      <main className="flex justify-center mt-[10%]">
        <section className="flex flex-col items-center border-2 border-[#CDB4DB] justify-center px-20 py-10 rounded-lg">
          <h2 className="uppercase text-[#3F37C9] text-2xl font-bold mb-20 underline">
            Register
          </h2>
          <form action={formAction}>
            <div className="flex justify-around mb-8 gap-[4vw]">
              <label htmlFor="username">Username</label>
              <input className="rounded-md" type="text" name="username" />
            </div>
            <div className="flex justify-around mb-8 gap-[4vw]">
              <label htmlFor="password">Password</label>
              <input className="rounded-md" type="text" name="password" />
            </div>
            <RegisterButton />
          </form>
          <p className="text-red-500 mt-5 mb-5">{state.message}</p>
        </section>
      </main>
    );
  }
  