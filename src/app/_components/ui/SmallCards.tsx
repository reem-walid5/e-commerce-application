import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-blue-500 text-lg md:text-xl" />,
    title: "Free Shipping",
    desc: "On orders over 500 EGP",
    bg: "bg-blue-100",
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-lg md:text-xl" />,
    title: "Secure Payment",
    desc: "100% secure transactions",
    bg: "bg-green-100",
  },
  {
    icon: <FaUndo className="text-orange-500 text-lg md:text-xl" />,
    title: "Easy Returns",
    desc: "14-day return policy",
    bg: "bg-orange-100",
  },
  {
    icon: <FaHeadset className="text-purple-500 text-lg md:text-xl" />,
    title: "24/7 Support",
    desc: "Dedicated support team",
    bg: "bg-purple-100",
  },
];

export default function SmallCards() {
  return (
    <div className="bg-gray-200">
      <div className="py-4 md:py-6 px-3 md:px-4 px-10 md:px-15 lg:px-25 m-auto">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-5 rounded-xl shadow-sm border"
            >
              
              <div
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full ${item.bg}`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-sm md:text-base text-gray-800">
                  {item.title}
                </h3>

                <p className="hidden sm:block text-xs md:text-sm text-gray-500">
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