import Link from "next/link";
import { getSession } from "../lib/session";

import LogOutButton from "./LogOutButton";

const navBar = async () => {
  const session = await getSession();
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Contact Manager
        </Link>
        {session ? (
          <>
            <Link href="/contact" className="hover:text-blue-600 mr-8">
              Contacts
            </Link>
            {/* (// i cannot use onClick here in a server side page as it is a
            client side functionality) */}
            <LogOutButton />
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-blue-600 mr-4">
              LogIn
            </Link>
            <Link href="/register" className="hover:text-blue-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default navBar;
