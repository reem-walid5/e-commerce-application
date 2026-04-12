"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "_/components/ui/dropdown-menu";

import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaRegHeart,
  FaRegUserCircle,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";

import Header from "../_components/Header/Header";
import { useCart } from "../_Context/CartContextProvider";
import { useWishlist } from "../_Context/WishlistContextProvider";
import { useState } from "react";

export default function Navbar() {
  const { numberOfCartItems } = useCart();
  const { numberOfWishlistItems } = useWishlist();
  const session = useSession();
  const isUserAuthenticated = session.status === "authenticated";

  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <Header />

      <div className="bg-white border-t border-[#15803D]">
        {/* NAV */}
        <nav className="flex items-center justify-between container m-auto py-3">
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2 text-3xl font-semibold text-gray-700">
            <FaShoppingCart className="text-[#15803D] text-4xl" />
            FreshCart
          </div>

         
          <div className="xl:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-gray-700"
            >
              <FaBars />
            </button>
          </div>

          
          <div className="hidden xl:flex items-center gap-6 w-full justify-between">
            
            
            <div className="flex items-center border rounded-full mx-5 overflow-hidden w-105 bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="bg-[#15803D] text-white rounded-full p-2 mx-2">
                <FaSearch />
              </button>
            </div>

            {/* LINKS */}
            <ul className="flex items-center gap-6 font-medium text-gray-700">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Shop">Shop</Link>
              </li>

              <DropdownMenu>
                <DropdownMenuTrigger>Categories</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/Categories">All Categories</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/Categories/Electronics">Electronics</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/Categories/WomenFashion">Women Fashion</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/Categories/MenFashion">Men Fashion</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/Categories/Beauty">Beauty & Health</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <li>
                <Link href="/Brands">Brands</Link>
              </li>
            </ul>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <FaPhoneAlt />
                <span>24/7</span>
              </div>

              <Link href="/WishList">
                <div className="relative">
                  <FaRegHeart className="text-xl text-gray-500" />
                  {numberOfWishlistItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {numberOfWishlistItems}
                    </span>
                  )}
                </div>
              </Link>

              <Link href="/cart">
                <div className="relative">
                  <FaShoppingCart className="text-xl text-gray-500" />
                  {numberOfCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {numberOfCartItems}
                    </span>
                  )}
                </div>
              </Link>

              {isUserAuthenticated ? (
                <Link href="/Profile">
                  <FaRegUserCircle className="text-xl text-gray-500" />
                </Link>
              ) : (
                <Link href="/LogIn">
                  <button className="flex items-center gap-2 bg-[#15803D] text-white px-4 py-2 rounded-full">
                    <FaUser />
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="xl:hidden border-t p-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/Shop" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link href="/Brands" onClick={() => setOpen(false)}>
              Brands
            </Link>

            <Link href="/Categories">Categories</Link>

            <Link href="/WishList">Wishlist ({numberOfWishlistItems})</Link>
            <Link href="/cart">Cart ({numberOfCartItems})</Link>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>24/7 Support</span>
            </div>

            {isUserAuthenticated ? (
              <Link href="/Profile">Profile</Link>
            ) : (
              <Link href="/LogIn">Sign In</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}