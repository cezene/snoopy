"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      city: "",
    },
  });

  const isSignIn = type === "sign-in";

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    const userData = {
      firstName: data.firstName!,
      lastName: data.lastName!,
      address1: data.address1!,
      city: data.city!,
      state: data.state!,
      postalCode: data.postalCode!,
      dateOfBirth: data.dateOfBirth!,
      ssn: data.ssn!,
      email: data.email,
      password: data.password
    }

    try {
      //Sign up with Appwrite & create plain link token
      if (isSignIn) {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/");
        }
      }
      if (!isSignIn) {
        const newUser = await signUp(userData);
        setUser(newUser);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
    setIsLoading(false);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src={"/icons/snoopy-bank-logo.png"}
            width={34}
            height={34}
            alt="Snoopy Logo"
          />
          <h1 className="text26 font-ibm-plex-serif font-bold text-yellow-100">
            Snoopy
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text24 lg:text36 font-semibold text-amber-500">
            {user ? "Link Account" : isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text16 font-normal text-yellow-200">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      { user ? ( 
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary"/>
        </div>
       ) : ( 
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {!isSignIn && (
                <div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="firstName"
                      label="First Name"
                      control={form.control}
                      placeholder="Example: John"
                    />
                    <CustomInput
                      name="lastName"
                      label="Last Name"
                      control={form.control}
                      placeholder="Example: Doe"
                    />
                  </div>
                  <CustomInput
                    name="city"
                    label="City"
                    control={form.control}
                    placeholder="Enter your city"
                  />

                  <CustomInput
                    name="address1"
                    label="Adress"
                    control={form.control}
                    placeholder="Enter your specific adress"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      name="state"
                      label="State"
                      control={form.control}
                      placeholder="Example: NY"
                    />
                    <CustomInput
                      name="postalCode"
                      label="Postal Code"
                      control={form.control}
                      placeholder="Example: 11101"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="dateOfBirth"
                      label="Date of Birth"
                      control={form.control}
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomInput
                      name="ssn"
                      label="SSN"
                      control={form.control}
                      placeholder="Example: 1234"
                    />
                  </div>
                </div>
              )}
              <CustomInput
                name="email"
                label="Email"
                control={form.control}
                placeholder="Enter your email"
              />
              <CustomInput
                name="password"
                label="Password"
                control={form.control}
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : isSignIn ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text14 font-normal text-yellow-200">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Link
              className="form-link"
              href={isSignIn ? "/sign-up" : "/sign-in"}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
       )} 
    </section>
  );
};

export default AuthForm;
