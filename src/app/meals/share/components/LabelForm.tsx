import { LabelHTMLAttributes } from "react";

import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({subsets: ["latin"]});

export default function LabelForm({htmlFor, children}: LabelHTMLAttributes<HTMLLabelElement>) {
   return (
      <label 
         htmlFor={htmlFor}
         className={`block mb-2 mt-4 text-base ${montSerrat.className} uppercase 
            text-orange-custom-1100 font-bold
         `}
      >
         {children}
      </label>
   )
}