import Image from "next/image"
import { Montserrat } from "next/font/google";
import { getMeal } from "@/app/lib/meals";
import { DummyMealsProps } from "../../../../initdb";
import { notFound } from "next/navigation";

const montSerrat = Montserrat({subsets: ["latin"]});

interface SlugMealsAttributes {
   mealSlug: string
}


interface SlugMealsProps {
   params: SlugMealsAttributes
}

export default function MealDetailsPage({params}: SlugMealsProps) {
   const meal = getMeal(params.mealSlug) as DummyMealsProps

   meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

   if(!meal) {
      notFound()
   } else {
      return (
         <>
            <header className="flex py-8 px-4 gap-12 items-center justify-center mt-10">
               <div className="relative w-2/6 h-80">
                  <Image
                     src={meal.image}
                     alt={meal.title}
                     className="object-cover rounded-lg shadow-custom2" 
                     fill 
                  />
               </div>
   
               <div className="pt-2 px-4 text-white-300 max-w-2xl flex flex-col gap-4">
                  <h1 className={`
                     text-6xl uppercase ${montSerrat.className} font-semibold
                  `}>
                     {meal.title}
                  </h1>
   
                  <p className="text-2xl text-orange-custom-800 italic">
                     by <a 
                           href={`mailto:${meal.creator_email}`}
                           className="bg-gradient-to-r from-orange-custom-300 to-orange-custom-500
                           bg-clip-text text-transparent hover:shadow-custom"
                        >{meal.creator}</a>
                  </p>
   
                  <p className="text-2xl">
                     {meal.summary}
                  </p>
               </div>
            </header>
            <main className="flex items-center justify-center">
               <p 
                  className="text-xl bg-orange-custom-900 text-orange-custom-1000 rounded-lg
                  shadow-custom2 p-8 max-w-5xl my-8 mx-auo" 
                  dangerouslySetInnerHTML={{
                     __html: meal.instructions,
                  }}
               >
                  
               </p>
            </main>
         </>
      )
   }

}