import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-blue-500 text-xl" />,
    title: "Free Shipping",
    desc: "On orders over 500 EGP",
    bg: "bg-blue-100",
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-xl" />,
    title: "Secure Payment",
    desc: "100% secure transactions",
    bg: "bg-green-100",
  },
  {
    icon: <FaUndo className="text-orange-500 text-xl" />,
    title: "Easy Returns",
    desc: "14-day return policy",
    bg: "bg-orange-100",
  },
  {
    icon: <FaHeadset className="text-purple-500 text-xl" />,
    title: "24/7 Support",
    desc: "Dedicated support team",
    bg: "bg-purple-100",
  },
];

export default function SmallCards() {
  return (
    <div className="bg-gray-200">
        <div className=" py-6 px-4 mt-0 container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}