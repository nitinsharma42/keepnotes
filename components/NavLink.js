"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, text}) {
  const pathname = usePathname();
  return (
    <Link
      className={`font-bold text-[#4895EF] hover:text-xl hover:text-[#4361EE] ${
        pathname === href && "text-[#3A0CA3] text-xl"
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}
