'use client'
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({subsets: ["latin"]});

export default function Error() {
   return (
      <main className="mt-20 text-center">
         <h1 className={`text-7xl mb-7 font-black text-error uppercase bg-gradient-to-r 
            from-orange-custom-300 to-orange-custom-400 bg-clip-text text-transparent
            bg-cover bg-center ${montSerrat.className}`
         }>
            An error occurred!
         </h1>
         <p className="text-2xl font-medium text-error-p">
            Failed to fetch meal data. Please try again later.
         </p>
      </main>
   )
}