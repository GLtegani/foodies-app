import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../../assets/logo.png"
import NavItem from "./NavItem";
import { Montserrat } from "next/font/google";
import MainHeaderBackground from "./MainHeaderBg";

const montSerrat = Montserrat({ subsets: ["latin"] });


export default function MainHeader() {
   return (
      <>
         <MainHeaderBackground />

         <header className="flex justify-between items-center py-8 px-4 md:px-10%">
            <Link 
               href="/" 
               className={`flex items-center justify-center gap-8 no-underline text-white-300
                  font-bold ${montSerrat.className} tracking-sm uppercase text-2xl`
               }
            >
               <Image 
                  src={logoImg} 
                  alt="A plate with food on it" 
                  className="w-20 h-20 object-contain shadow-lg rounded-full p-1 bg-orange-400"
                  priority
               />
               NextLevel Food
            </Link>

            <nav>
               <ul className="list-none m-0 p-0 flex gap-6 text-xl">
                  <li>
                     <NavItem 
                        item="Browse Meals"
                        href="/meals" 
                     />
                  </li>
                  <li>
                     <NavItem 
                        item="Foodies Community" 
                        href="/community"
                     />
                  </li>
               </ul>
            </nav>
         </header>
      </>
   )
}