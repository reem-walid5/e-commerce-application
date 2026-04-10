import { FaBox, FaLock, FaHeadset } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl">
            <FaBox />
          </div>
          <div>
            <h1 className="text-2xl font-bold">My Orders</h1>
            <p className="text-gray-500 text-sm">
              Track and manage your 2 orders
            </p>
          </div>
        </div>

        <button className="text-green-600 font-medium flex items-center gap-2">
          <FaLock /> Continue Shopping
        </button>
      </div>

      {/* Orders */}
      {/* <div className="max-w-md mx-auto mt-10 space-y-3"> */}

      {/* Item 1 */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between bg-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
          <div>
            <h4 className="text-sm font-semibold">Woman Shawl</h4>
            <p className="text-xs text-gray-500">1 × 149 EGP</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold leading-none">149</p>
          <span className="text-xs text-gray-500">EGP</span>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-between bg-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
          <div>
            <h4 className="text-sm font-semibold">Woman Shawl</h4>
            <p className="text-xs text-gray-500">1 × 149 EGP</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold leading-none">149</p>
          <span className="text-xs text-gray-500">EGP</span>
        </div>
      </div>

      </div>
    {/* </div> */}
      
    </div>
  );
}
