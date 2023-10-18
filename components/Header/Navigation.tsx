"use client";
import s from "@/components/Header/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";


type navigateType = {
  label: string
  link: string
}

type propsType = {
  data: navigateType[]
}
const Navigation = ({ data }: propsType) => {
  const path = usePathname();
  const session = useSession();

  const handleSignOut = () => signOut({callbackUrl:'/'});
  return (
    <>
      {data.map(n => {
          const style = path === n.link ? `${s.link} ${s.active}` : s.link;
          return (
            <Link key={n.label} href={n.link} className={style}>{n.label}</Link>
          );
        }
      )}
      {session?.data && <Link href={"/profile"}>Profile</Link>}
      {session?.data ? <Link href={"#"} onClick={handleSignOut}>Sign Out</Link> :
        <Link href={"/signin"}>Sign In</Link>}
    </>
  );
};

export default Navigation;