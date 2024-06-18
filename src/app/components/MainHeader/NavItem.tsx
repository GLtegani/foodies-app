import Link from "next/link";

interface NavItemProps {
   item: string
}

export default function NavItem({item}: NavItemProps) {
   return (
      <Link 
         className="
            no-underline text-white-300 font-bold py-2 px-4 rounded-lg 
            hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:h-screen hover:bg-clip-text
            hover:text-transparent hover:shadow-lg hover:shadow-orange-600
            active:bg-gradient-to-r active:from-orange-500 active:to-yellow-400 active:h-screen active:bg-clip-text
            active:text-transparent active:shadow-LG active:shadow-orange-600" 
         href="/meals"
      >
         {item}
      </Link>
   )
}