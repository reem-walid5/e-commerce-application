import React from "react";
import { BiSolidCart } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaGift, FaPhoneAlt, FaUserPlus ,FaShoppingCart, FaHeart, FaUser, FaSearch} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Headphones } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div>
      <div className="container m-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <BiSolidCart className="text-[15px] text-[#7f5539]" />
            <p className="text-[#b08968] text-[14px]">Free Shipping on Orders 500 EGP</p>
          </div>
          <div className="flex items-center gap-1">
            <FaGift className="text-[15px] text-[#7f5539]" />
            <p className="text-[#b08968] text-[14px]">New Arrivals Daily</p>
          </div>
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-[12px] text-[#b08968]" />
            <p className="text-[#b08968] text-[13px]">+1 (800) 123-4567</p>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-[12px] text-[#b08968]" />
            <p className="text-[#b08968] text-[13px]">support@freshcart.com</p>
          </div>
          <div className="bg-[#9c6644] w-0.5 h-5"></div>
          <div className="flex items-center gap-1">
            <CiUser className="text-[12px] text-[#b08968]" />
            <p className="text-[#b08968] text-[13px]">SignIn</p>
          </div>
          <div className="flex items-center gap-1">
            <FaUserPlus className="text-[12px] text-[#b08968]" />
            <p className="text-[#b08968] text-[13px]">SignUp</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#9c6644]">
        <nav className="flex items-center justify-between px-10 py-3 bg-gray-100">

      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-semibold text-green-600">
        <FaShoppingCart />
        FreshCart
      </div>

      {/* Search */}
      <div className="flex items-center border rounded-full overflow-hidden w-105 bg-white">
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="flex-1 px-4 py-2 outline-none"
        />
        <button className="bg-green-600 text-white px-4 py-2">
          <FaSearch />
        </button>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-6 font-medium text-gray-700">

        <li className="cursor-pointer">Home</li>

        <li className="cursor-pointer">Shop</li>

        {/* Categories Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="border px-3 py-1 rounded cursor-pointer">
            Categories
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>Vegetables</DropdownMenuItem>
            <DropdownMenuItem>Fruits</DropdownMenuItem>
            <DropdownMenuItem>Dairy</DropdownMenuItem>
            <DropdownMenuItem>Snacks</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <li className="cursor-pointer">Brands</li>

      </ul>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Headphones size={20} />
          <div>
            <p className="text-xs">Support</p>
            <p className="text-xs font-semibold">24/7 Help</p>
          </div>
        </div>

        <FaHeart className="text-lg cursor-pointer" />
        <FaShoppingCart className="text-lg cursor-pointer" />

        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full">
          <FaUser />
          Sign In
        </button>

      </div>
    </nav>
      </div>
    </div>
  );
}
