import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLock,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiRefreshCw } from "react-icons/fi";
import { MdLocalShipping, MdOutlineShoppingCart } from "react-icons/md";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="bg-green-50">
        <div className="flex items-center justify-between py-6 px-10 md:px-15 lg:px-25 m-auto">
        <div className="flex items-center gap-3">
          <MdLocalShipping className="text-green-600 text-xl" />
          <div>
            <p className="font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500">
              On orders over 500 EGP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FiRefreshCw className="text-green-600 text-xl" />
          <div>
            <p className="font-medium">Easy Returns</p>
            <p className="text-sm text-gray-500">
              14-day return policy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaLock className="text-green-600 text-xl" />
          <div>
            <p className="font-medium">Secure Payment</p>
            <p className="text-sm text-gray-500">
              100% secure checkout
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaHeadset className="text-green-600 text-xl" />
          <div>
            <p className="font-medium">24/7 Support</p>
            <p className="text-sm text-gray-500">Contact us anytime</p>
          </div>
        </div>
      </div>
      </div>
      <footer className="bg-[#0D1B2A] text-gray-300 pt-16 pb-6 px-8  md:px-10 md:px-15 lg:px-25 m-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg w-fit mb-6">
            <span className="text-green-500 text-2xl">
              <MdOutlineShoppingCart />
            </span>
            <span className="font-semibold text-black text-2xl">FreshCart</span>
          </div>

          <p className="text-gray-400 text-sm leading-6 mb-6 max-w-md">
            FreshCart is your one-stop destination for quality products. From
            fashion to electronics, we bring you the best brands at competitive
            prices with a seamless shopping experience.
          </p>

          {/* CONTACT */}
          <div className="space-y-3 text-sm">
            <a
              href="tel:+18001234567"
              className="flex items-center gap-2 hover:text-green-400 cursor-pointer duration-150 transition-all"
            >
              <FiPhone className="text-green-400" />
              +1 (800) 123-4567
            </a>

            {/* EMAIL */}
            <a
              href="mailto:support@freshcart.com"
              className="flex items-center gap-2 hover:text-green-400 cursor-pointer duration-150 transition-all"
            >
              <FiMail className="text-green-400" />
              support@freshcart.com
            </a>

            <p className="flex items-center gap-2">
              <FiMapPin className="text-green-400" />
              123 Commerce Street, New York, NY 10001
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#13283C] hover:bg-green-500 cursor-pointer">
              <FaFacebookF size={14} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#13283C] hover:bg-green-500 cursor-pointer">
              <FaTwitter size={14} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#13283C] hover:bg-green-500 cursor-pointer">
              <FaInstagram size={14} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#13283C] hover:bg-green-500 cursor-pointer">
              <FaYoutube size={14} />
            </div>
          </div>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-[20px]">Shop</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>All Products</li>
            <li>Categories</li>
            <li>Brands</li>
            <li>Electronics</li>
            <li>Men&apos;s Fashion</li>
            <li>Women&apos;s Fashion</li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-[20px]">Account</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>My Account</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Shopping Cart</li>
            <li>Sign In</li>
            <li>Create Account</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-[20px]">Support</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Shipping Info</li>
            <li>Returns & Refunds</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-5 text-[20px]">Legal</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#1E2D3D] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2026 FreshCart. All rights reserved.</p>

        <div className="flex items-center gap-5 mt-4 md:mt-0 text-xl">
          <div className=" flex items-center gap-1">
            <FaCcVisa size={20} /> <p className="text-[14px]">Visa</p>
          </div>
          <div className=" flex items-center gap-1">
            <FaCcMastercard size={20} />{" "}
            <p className="text-[14px]">Mastercard</p>
          </div>
          <div className=" flex items-center gap-1">
            <FaCcPaypal size={20} /> <p className="text-[14px]">PayPal</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
