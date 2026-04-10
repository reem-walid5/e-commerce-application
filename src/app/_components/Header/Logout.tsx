"use client";
import { signOut } from 'next-auth/react'
import { IoIosLogOut } from "react-icons/io";

export default function Logout() {

    function handleLogOut() {
        signOut({ redirect: true, callbackUrl: "/LogIn" })
    }

  return (
    <span
      className='cursor-pointer text-gray-500 text-[13px] flex items-center gap-0.5'
      onClick={handleLogOut}
    >
      <IoIosLogOut /> Log Out
    </span>
  )
}