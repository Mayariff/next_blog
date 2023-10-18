"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const YandexButton = () => {
  const searchParam = useSearchParams();
  const callbackUrl = searchParam.get("callbackUrl") || "/";
  const handleSignIn = () => {
    signIn("yandex", { callbackUrl });
  };
  return (
    <button onClick={handleSignIn}>
      Sign in with Yandex
    </button>
  );
};

export default YandexButton;