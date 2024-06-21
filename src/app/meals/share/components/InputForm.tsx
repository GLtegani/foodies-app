import { InputHTMLAttributes } from "react";

import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({subsets: ["latin"]});

export default function InputForm({type, id, name}: InputHTMLAttributes<HTMLInputElement>) {
   return (
      <input 
         type={type} 
         id={id} 
         name={name}
         className={`block w-full py-2 px-4 rounded-md border border-solid 
            border-orange-custom-1200 bg-orange-custom-1300 text-xl ${montSerrat.className} 
            text-white focus:outline-orange-custom-1400 focus:bg-orange-custom-1500
         `} 
         required
      />
   )
}