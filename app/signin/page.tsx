import React from "react";
import { SignInForm, YandexButton } from "@/components";

const Page = async () => {
  return (
    <div>
      <h1>Sign In</h1>
      <YandexButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default Page;