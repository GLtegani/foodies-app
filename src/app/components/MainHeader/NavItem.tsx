'use client'
import Link from "next/link";
import {LinkProps} from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps extends LinkProps {
   item: string
}

export default function NavLink(props: NavItemProps) {
   const pathname = usePathname()

   return (
      <Link 
         className={`  
            no-underline text-white-300 font-bold py-2 px-4 rounded-lg 
            hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:h-screen hover:bg-clip-text
            hover:text-transparent hover:shadow-lg hover:shadow-orange-600
            ${pathname === props.href ? `bg-gradient-to-r from-orange-500 to-yellow-400 
            h-screen bg-clip-text text-transparent shadow-lg shadow-orange-600` : ''}
            `
         } 
         {...props}
      >
         {props.item}
      </Link>
   )
}