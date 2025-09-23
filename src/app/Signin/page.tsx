

"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { XCircle } from "lucide-react";
import { signinSchema, SigninSchemaType } from "@/schema/signin.schema";
import ShowPassword from "../_componets/ShowPassword/ShowPassword";
import { signIn } from "next-auth/react";
import Link from "next/link";
import TitlePage from "../_componets/TitlePage/TitlePage";

const Signin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<SigninSchemaType>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(signinSchema),
  });

  async function handleSignin(values: SigninSchemaType) {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    setLoading(false);

    if (res?.ok) {
      toast.success("Signin successfully", { position: "top-center" });
      router.push(res.url || "/");
    } else {
      toast.error(res?.error, {
        position: "top-center",
        icon: <XCircle className="text-red-500" />,
      });
    }
  }

  return (
    <>
      <TitlePage title="Signin" />
      <div className="mx-auto px-10 md:px-0 w-full md:w-1/2 mt-30">
        <h1 className="text-3xl font-semibold text-center">Signin</h1>
        <div className="py-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSignin)}
              className="flex flex-col gap-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <ShowPassword control={form.control} name="password" />

              <div className="flex justify-between items-center">
                <Link
                  href="/forgetPassword"
                  className="hover:text-green-600 transition-all duration-100 font-semibold"
                >
                  Forget your password?
                </Link>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {loading ? "Signing in..." : "Signin"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signin;

