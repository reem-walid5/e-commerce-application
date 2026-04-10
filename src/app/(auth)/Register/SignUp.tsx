"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "_/components/ui/field";
import { Input } from "_/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { toast } from "sonner";
import { registerObjectType } from "./Register.type";
import { registerActions } from "./RegisterActions";
import { registerScema } from "./RegisterScema";
export default function SignUp() {
    const router = useRouter()
  const { handleSubmit, control , formState: { isSubmitting } } = useForm<registerObjectType>({
    resolver: zodResolver(registerScema),
  });
  async function MySubmit(data: registerObjectType) {
    console.log("register", data);
    const result = await registerActions(data);

  if (result?.success) {
    toast.success(result.message || "Account created successfully");
    setTimeout(() => {
        router.push('/LogIn')
    },1500 );
  } else {
    toast.error(result?.message || "Something went wrong");
  }
  }

  return (
    <div className="w-full items-center justify-center flex mt-8 ">
        {/* <Toaster position="top-center" richColors /> */}
      <div className="w-full max-w-md border p-6  rounded-lg shadow border-gray-300 ">
        <form id="form-rhf-demo" onSubmit={handleSubmit(MySubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="name"
                    className="text-[16px] font-meduim"
                  >
                    Name*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
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
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="rePassword"
                    className="text-[16px] font-meduim"
                  >
                    Confirm Password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rePassword"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm your password"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="phone"
                    className="text-[16px] font-meduim"
                  >
                    Phone Number*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="+1 123 456 7891"
                    autoComplete="off"
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
              {isSubmitting ? "Loading..." : <div className="flex items-center justify-center gap-2"> <FaUser />Create my account</div>}
            </button>
            <div className="w-full h-px bg-gray-300 mt-1 rounded shadow mb-4"></div>
            <div className="flex items-center justify-center font-meduim gap-1 text-[18px]">
                <p className="text-black ">Already have an account? </p>
                <Link href='/LogIn' className="text-green-500 hover:underline">Sign In</Link>
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
