import Link from "next/link";
import { Montserrat } from "next/font/google";
import MealsGrid, { MealsProps } from "./components/MealsGrid";
import { getMeals } from "../lib/meals";
import { Suspense } from "react";
import { Metadata } from "next";

const montSerrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
   title: 'All Meals',
   description: 'Browse the delicious meals shared by our vibrant community.',
};
 

async function Meals() {
   const meals = await getMeals() as MealsProps[];
   return <MealsGrid meals={meals} />
}

export default function MealsPage() {
   return (
      <>
         <header className="mt-12 mx-auto mb-20 w-90% max-w-6.5xl text-white-300 text-2xl">
            <h1 className={`${montSerrat.className} font-bold text-4xl mt-10% mb-8`}>
               Delicious meals, created {''}
               <span 
                  className={`bg-gradient-to-r from-orange-custom-300 
                     to-orange-custom-500 bg-clip-text text-transparent
                  `}
               >
                  by you
               </span>
            </h1>

            <p className="m-0">
               Choose your favorite recipe and cook it yourself. It is easy and fun!
            </p>

            <p className="m-0">
               <Link 
                  href="/meals/share"
                  className="inline-block mt-4 py-2 px-4 rounded-lg transition-all duration-1000 
                  ease-in-out bg-gradient-to-r from-orange-custom-300 to-orange-custom-200 text-white 
                  font-bold no-underline hover:from-orange-custom-500 hover:to-orange-custom-100
                  "
               >
                  Share Your Favorite Recipe
               </Link>
            </p>
         </header>
         <main className="main">
            <Suspense fallback={
               <h2 
                  className="text-center text-3xl animate-bounce ease-in-out text-white-300
                  mt-16"
               >
                  Fetching meals...
               </h2>
            }>
               <Meals />
            </Suspense>
         </main>
      </>
   )
}