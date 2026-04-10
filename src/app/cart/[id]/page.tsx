"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "_/app/_Context/CartContextProvider";
import { useParams, useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import {
  FaCity,
  FaCreditCard,
  FaHome,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhone,
} from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";
import { createCachCard, createOnlinePayment } from "../CartActions";

const schema = z.object({
  city: z.string(),
  details: z.string(),
  phone: z.string().regex(/^01[0-9]{9}$/, "Invalid Egyptian phone number"),
  paymentType: z.enum(["cod", "online"]),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
  const { updataCartNumber } = useCart();
  const { id } = useParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { paymentType: "cod" },
  });

  async function onSubmit(data: FormData) {
    const shippingAddress = {
      city: data.city,
      details: data.details,
      phone: data.phone,
    };

    if (data.paymentType === "cod") {
      const bodyCOD = {
        shippingAddress: { ...shippingAddress, postalCode: "" },
      };
      await createCachCard(id as string, bodyCOD);
      toast.success("Cash order created successfully");
      updataCartNumber(0);
      router.push("/");
    } else {
      const bodyOnline = { shippingAddress };
      const finalRes = await createOnlinePayment(id as string, bodyOnline);
      console.log("Online Payment Response:", finalRes);
      if (finalRes?.session?.url) {
        toast.success("Redirecting to payment...");
        window.location.assign(finalRes.session.url);
      } else {
        toast.error("Failed to initiate online payment");
        console.log("Online Payment Error Response:", finalRes);
      }
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-6">
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="bg-green-700 text-white p-5 flex items-center gap-2 text-lg font-semibold">
          <FaHome />
          <h2>Shipping Address</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          {/* INFO BOX */}
          <div className="bg-gray-100 rounded-xl p-4 flex gap-3 items-start border">
            <div className="bg-blue-500 text-white p-2 rounded-full text-sm">
              <FaInfoCircle />
            </div>
            <div>
              <p className="text-blue-700 font-medium">Delivery Information</p>
              <p className="text-blue-500 text-sm">
                Please ensure your address is accurate for smooth delivery
              </p>
            </div>
          </div>

          {/* CITY */}
          <div>
            <label className="block text-sm font-medium mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-xl px-3 py-3 bg-gray-50">
              <FaCity className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="e.g. Cairo"
                {...register("city")}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Street Address <span className="text-red-500">*</span>
            </label>
            <div className="flex items-start border rounded-xl px-3 py-3 bg-gray-50">
              <FaMapMarkerAlt className="text-gray-400 mr-2 mt-1" />
              <textarea
                placeholder="Street, building, floor..."
                {...register("details")}
                className="bg-transparent outline-none w-full text-sm resize-none"
                rows={2}
              />
            </div>
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.details.message}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-xl px-3 py-3 bg-gray-50">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="01xxxxxxxxx"
                {...register("phone")}
                className="bg-transparent outline-none w-full text-sm"
              />
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Egyptian numbers only
              </span>
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* PAYMENT METHOD */}
          <Controller
            name="paymentType"
            control={control}
            render={({ field }) => (
              <div className="space-y-3">
                <label className="cursor-pointer block">
                  <div
                    className={`flex items-center justify-between rounded-xl p-4 border-2 transition border-gray-200 ${field.value === "cod" ? "border-green-600 bg-green-50" : "bg-white"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-gray-200 text-gray-500">
                        {<FaMoneyBillWave />}
                      </div>
                      <div>
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className="text-sm text-gray-600">
                          Pay when your order arrives
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      value="cod"
                      checked={field.value === "cod"}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-5 h-5 accent-green-600"
                    />
                  </div>
                </label>

                <label className="cursor-pointer block">
                  <div
                    className={`flex items-center justify-between rounded-xl p-4 border-2 transition border-gray-200 ${field.value === "online" ? "border-green-600 bg-green-50" : "bg-white"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-gray-200 text-gray-500">
                        {<FaCreditCard />}
                      </div>
                      <div>
                        <p className="font-semibold">Pay Online</p>
                        <p className="text-sm text-gray-500">
                          Credit/Debit Card via Stripe
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      value="online"
                      checked={field.value === "online"}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-5 h-5 accent-green-600"
                    />
                  </div>
                </label>
              </div>
            )}
          />

          {/* BUTTONS CONDITIONAL */}
          <Controller
            name="paymentType"
            control={control}
            render={({ field }) => (
              <>
                {/* payment options... */}

                <div className="mt-4">
                  {field.value === "cod" && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-700 text-xl cursor-pointer text-white w-full p-3 rounded-xl"
                    >
                      Place Order
                    </button>
                  )}
                  {field.value === "online" && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-xl cursor-pointer text-white w-full p-3 rounded-xl"
                    >
                      Proceed to Payment
                    </button>
                  )}
                </div>
              </>
            )}
          />
        </form>
      </div>
    </div>
  );
}
