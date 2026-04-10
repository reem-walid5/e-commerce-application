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
} from "react-icons/fa";
import Header from "../_components/Header/Header";
import { useCart } from "../_Context/CartContextProvider";
import { useWishlist } from "../_Context/WishlistContextProvider";
export default function Navbar() {
  const { numberOfCartItems } = useCart();
  const { numberOfWishlistItems } = useWishlist();
  const session = useSession();
  const isUserAuthenticated = session.status === "authenticated";
  return (
    <div className="sticky top-0 z-50 bg-white">
      <Header />
      <div className="bg-white border-t border-[#15803D]">
        <nav className="flex items-center justify-between container m-auto py-3 ">
          {/* Logo */}
          <div className="flex items-center gap-2 text-3xl font-semibold text-gray-700">
            <FaShoppingCart className="text-[#15803D] text-4xl" />
            FreshCart
          </div>
          {/* Search */}
          <div className="flex items-center border rounded-full overflow-hidden w-105 bg-white">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-[#15803D] text-white rounded-full p-2 mx-2">
              <FaSearch />
            </button>
          </div>
          {/* Links */}
          <ul className="flex items-center gap-6 font-medium text-gray-700">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/Shop">Shop</Link>
            </li>
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#f2f2f2]">
                <DropdownMenuItem className="text-[#15803D]">
                  <Link href="/Categories">All Categories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#15803D]">
                  <Link href="/Categories/Electronics">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#15803D]">
                  <Link href="/Categories/WomenFashion">Women&apos;s Fashion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#15803D]">
                  <Link href="/Categories/MenFashion">men&apos;s Fashion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#15803D]">
                  <Link href="/Categories/Beauty">Beauty & Health</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <li className="cursor-pointer">
              <Link href="/Brands">Brands</Link>
            </li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaPhoneAlt size={20} />
              <div>
                <p className="text-xs">Support</p>
                <p className="text-xs font-semibold">24/7 Help</p>
              </div>
            </div>

            <Link href="/WishList">
              <div className="relative">
            <FaRegHeart className="text-xl transition-all duration-100 hover:text-[#15803D] cursor-pointer text-gray-500" />
                {numberOfWishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {numberOfWishlistItems}
                  </span>
                )}
              </div>{" "}
            </Link>
            <Link href="/cart">
              <div className="relative">
                <FaShoppingCart className="text-xl transition-all duration-100 hover:text-[#15803D] cursor-pointer text-gray-500" />
                {numberOfCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {numberOfCartItems}
                  </span>
                )}
              </div>
            </Link>
            {isUserAuthenticated ? (
              <Link href="/Profile">
                <FaRegUserCircle className="text-xl transition-all duration-100 hover:text-[#15803D] cursor-pointer text-gray-500" />
              </Link>
            ) : (
              <Link href="/LogIn">
                <button className="flex items-center cursor-pointer gap-2 bg-[#15803D] text-[#f2f2f2] px-4 py-2 rounded-full">
                  <FaUser />
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
