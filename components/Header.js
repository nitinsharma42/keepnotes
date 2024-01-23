import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

import notesLogo from "@/public/note-taking.png";
import NavLink from "./NavLink";

export default function Header() {
  const tokenCookie = cookies().get("token");
  return (
    <header className="bg-white">
      <nav className="flex px-10 py-5 justify-between items-center text-lg">
        <div>
          <Image className="w-16 rounded-full" src={notesLogo} alt="..." />
        </div>
        <div>
          <ul className="flex align-middle items-center gap-[4vw] ">
            <li>
              <NavLink text="Notes" href="/notes" />
            </li>
            <li>
              <NavLink text="Shopping List" href="/shopping-list" />
            </li>
            <li>
              <NavLink text="Reminder" href="/reminder" />
            </li>
            <li>
              <NavLink text="Share" href="/share" />
            </li>
          </ul>
        </div>
        <div>
          {tokenCookie ? (
            <Link
              className="border-1 border-gray-500 px-3 py-2 bg-[#FFC8DD] rounded-lg hover:bg-[#FFAFCC]"
              href="/logout"
            >
              Logout
            </Link>
          ) : (
            <Link
              className="border-1 border-gray-500 px-3 py-2 bg-[#FFC8DD] rounded-lg hover:bg-[#FFAFCC]"
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
