"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "_/components/ui/field";
import { Input } from "_/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { toast } from "sonner";
import { loginObjectType } from "./Login.type";
import { loginScema } from "./LoginScema";
import { useCart } from "_/app/_Context/CartContextProvider";
import getCurrentUserLogin from "./LoginActions";
export default function Login() {
    const router = useRouter()
    const {updataCartNumber} = useCart()
  const { handleSubmit, control , formState: { isSubmitting } } = useForm<loginObjectType>({
    resolver: zodResolver(loginScema),
  });
  async function MySubmit(data: loginObjectType) {
    console.log("login", data);
    const res = await signIn('credentials' , {redirect:false , ...data})
  //   const result = await LoginActions(data);

  if (res?.ok) {
  toast.success("Login successful");
  const res = await getCurrentUserLogin()
  updataCartNumber(res?.products.length)
  setTimeout(() => {
    router.push("/");
  }, 500);
} else {
  toast.error(res?.error || "Invalid email or password");
}
  }

  return (
    <div className="w-full items-center justify-center flex mt-8 ">
        {/* <Toaster position="top-center" richColors /> */}
      <div className="w-full max-w-md border p-6  rounded-lg shadow border-gray-300 ">
        <form id="form-rhf-demo" onSubmit={handleSubmit(MySubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="email"
                    className="text-[16px] font-meduim"
                  >
                    Email*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali@gmail.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="password"
                    className="text-[16px] font-meduim"
                  >
                    Password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Create a strong password"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 rounded-2xl cursor-pointer hover:bg-green-700 transition-all duration-300 w-full text-white py-3 font-meduim text-[18px]  mt-4"
            >
              {isSubmitting ? "Loading..." : <div className="flex items-center justify-center gap-2"> <FaUser />Sign In</div>}
            </button>
            <div className="w-full h-px bg-gray-300 mt-1 rounded shadow mb-1"></div>
            <div className="flex items-center justify-center font-meduim gap-1 text-[18px]">
                <p className="text-black ">New to FreshCart? </p>
                <Link href='/Register' className="text-green-500 hover:underline">Create an account</Link>
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
