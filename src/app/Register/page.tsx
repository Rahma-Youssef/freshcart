"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, RegisterSchemaType } from "@/schema/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { XCircle } from "lucide-react";
import ShowPassword from "../_componets/ShowPassword/ShowPassword";
import TitlePage from "../_componets/TitlePage/TitlePage";

const Register = () => {
  const router = useRouter();

  const form = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  async function handleSubmit(values: RegisterSchemaType) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      console.log(data);
      toast.success(data.message, {
        position: "top-center",
        duration: 3000,
      });

      router.push("/Signin");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong, please try again!";

      toast.error(message, {
        position: "top-center",
        duration: 3000,
        icon: <XCircle className="text-red-500" />,
      });
    }
  }

  return (
    <>
      <TitlePage title="Regiser" />
      <div className="mx-auto px-10 md:px-0 w-full md:w-1/2 mt-30">
        <h1 className="text-3xl font-semibold">Register Now:</h1>
        <div className="py-5 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" flex flex-col gap-3 "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-[17px] font-normal">
                      name:
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} className="focus:" />
                    </FormControl>
                    <FormMessage />
                    <FormDescription></FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-[17px] font-normal">
                      email:
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription></FormDescription>
                  </FormItem>
                )}
              />

              <ShowPassword control={form.control} name="password" />

              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-[17px] font-normal">
                      rePassword:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        onPaste={(e) => e.preventDefault()}
                      />
                    </FormControl>
                    <FormMessage />
                    <FormDescription></FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-[17px] font-normal">
                      phone:
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription></FormDescription>
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-600 cursor-pointer hover:scale-95 transition-all duration-200 "
                >
                  Register
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
