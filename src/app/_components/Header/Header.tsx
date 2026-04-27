"use client";
import { BiSolidCart } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaGift, FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Logout from "./Logout";

export default function Header() {
  const { data: session } = useSession();

  const userName = session?.user?.name;
  const isUserAuthenticated = !!userName;

  return (
    <div className="px-10 md:px-15 lg:px-25 m-auto py-3 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-5">
        
        {/* Free Shipping */}
        <div className="flex items-center gap-1">
          <BiSolidCart className="text-[15px] text-[#15803D]" />
          <p className="text-gray-500 text-[14px]">
            Free Shipping on Orders 500 EGP
          </p>
        </div>

        {/* New Arrivals (Desktop only) */}
        <div className="hidden xl:flex items-center gap-1">
          <FaGift className="text-[15px] text-[#15803D]" />
          <p className="text-gray-500 text-[14px]">
            New Arrivals Daily
          </p>
        </div>

      </div>

      {/* MOBILE (icons only) */}
      <div className="flex items-center gap-3 xl:hidden">
        <FaPhoneAlt className="text-[12px] text-gray-500" />
        <MdEmail className="text-[12px] text-gray-500" />
      </div>

      {/* DESKTOP */}
      <div className="hidden xl:flex items-center gap-5">

        <div className="flex items-center gap-1">
          <FaPhoneAlt className="text-[12px] text-gray-500" />
          <p className="text-gray-500 text-[13px]">
            +1 (800) 123-4567
          </p>
        </div>

        <div className="flex items-center gap-1">
          <MdEmail className="text-[12px] text-gray-500" />
          <p className="text-gray-500 text-[13px]">
            support@freshcart.com
          </p>
        </div>

        <div className="bg-[#15803D] w-0.5 h-5"></div>

        {isUserAuthenticated ? (
          <Link href="/Profile" className="text-gray-500 text-[13px]">
            {userName}
          </Link>
        ) : (
          <Link href="/LogIn" className="flex items-center gap-1">
            <CiUser className="text-[12px] text-gray-500" />
            <p className="text-gray-500 text-[13px]">SignIn</p>
          </Link>
        )}

        {isUserAuthenticated ? (
          <Logout />
        ) : (
          <Link href="./Register" className="flex items-center gap-1">
            <FaUserPlus className="text-[12px] text-gray-500" />
            <p className="text-gray-500 text-[13px]">SignUp</p>
          </Link>
        )}
      </div>

    </div>
  );
}