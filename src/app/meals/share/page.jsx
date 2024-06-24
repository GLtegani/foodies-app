'use client'

import { shareMeal } from "@/app/lib/actions";
import ImagePicker from "./components/ImagePicker";
import InputForm from "./components/InputForm";
import LabelForm from "./components/LabelForm";
import { Montserrat } from "next/font/google";
import MealsFormSubmit from "./components/MealsFormSubmit";
import { useFormState } from "react-dom";

const montSerrat = Montserrat({subsets: ["latin"]});

export default function ShareMealPage() {
   const [state, formAction] = useFormState(shareMeal, {message: null})

   return (
      <>
         <header className="mt-16 mx-auto mb-14 w-90% max-w-6xl text-white-300 text-2xl">
            <h1 className={`${montSerrat.className} text-5xl font-bold mb-7`}>
               Share your <span 
                              className="bg-gradient-to-r from-orange-custom-300 
                              to-orange-custom-500 bg-clip-text text-transparent">
                                 favorite meal
                           </span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
         </header>
         <main className="w-90% max-w-6xl my-12 mx-auto text-white">
            <form className="max-w-3xl" action={formAction}>
               <div className="flex gap-4">
                  <p>
                     <LabelForm htmlFor="name">
                        Your name
                     </LabelForm>
                     <InputForm type="text" id="name" name="name" />
                  </p>
                  <p>
                     <LabelForm htmlFor="email">
                        Your email
                     </LabelForm>
                     <InputForm type="email" id="email" name="email" />
                  </p>
               </div>
               <p>
                  <LabelForm htmlFor="title">
                     Title
                  </LabelForm>
                  <InputForm type="text" id="title" name="title" />
               </p>
               <p>
                  <LabelForm htmlFor="summary">
                     Short Summary
                  </LabelForm>
                  <InputForm type="text" id="summary" name="summary" />
               </p>
               <p>
                  <LabelForm htmlFor="instructions">
                     Instructions
                  </LabelForm>
                  <textarea
                     id="instructions"
                     name="instructions"
                     required
                     className={`block w-full py-2 px-4 rounded-md border border-solid 
                        border-orange-custom-1200 bg-orange-custom-1300 text-xl ${montSerrat.className} 
                        text-white focus:outline-orange-custom-1400 focus:bg-orange-custom-1500
                        resize-none
                     `}
                  ></textarea>
               </p>
               <ImagePicker 
                  label="Your Image"
                  name="image"
               />
               <p className="text-right">
                  {state.message && <p>{state.message}</p>}
                  <MealsFormSubmit />
               </p>
            </form>
         </main>
      </>
   );
}