"use client";

import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth";
// import { redirect } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();

      // the redirect happens in the server action
      // the client-side redirect is a fallback

      // redirect("/login");
      // the redirect method works fine both in server actions and client components

      // but we have a better option for client components as 'router'
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("logout failed:", error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogOutButton;
