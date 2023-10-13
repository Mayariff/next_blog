"use client"
import s from "@/components/Header/Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";



 type navigateType = {
  label: string
  link: string
}

type propsType ={
   data: navigateType[]
}
const Navigation = ({data}:propsType) => {
  const path = usePathname()
  return (
    <>
      {data.map(n=>  {
        const style = path === n.link ? `${s.link} ${s.active}` :s.link
        return(
          <Link  key = {n.label} href={n.link} className={style}>{n.label}</Link>
        )}
      )
      }
    </>
  );
};

export default Navigation;