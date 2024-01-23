'use client'

import { useFormStatus } from "react-dom";

export default function RegisterButton() {
    const { pending } = useFormStatus();
    return (
        <button
              type="submit"
              className="flex bg-[#4361EE] px-5 py-2 rounded-lg text-white hover:text-gray-100 hover:bg-[#3F37C9] m-auto"
            >
              {pending ? "Registering..." : "Register"}
            </button>
    )
}