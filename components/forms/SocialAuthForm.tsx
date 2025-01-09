"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider = "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Sign in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5  ">
      <Button
        onClick={() => handleSignIn("github")}
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
      >
        <Image
          src="/icons/github.svg"
          alt="Github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>login with GitHub</span>
      </Button>
      <Button
        onClick={() => handleSignIn("google")}
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
      >
        <Image
          src="/icons/google.svg"
          alt="Github logo"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        />
        <span>login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
