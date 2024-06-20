import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({subsets: ["latin"]});

export interface MealItemProps {
   title: string
   slug: string
   image: string
   summary: string
   creator: string
}

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
   return (
      <article 
         className="flex flex-col justify-between h-full rounded shadow-custom3 overflow-hidden
         transition-all duration-300 ease-in-out text-white-300 bg-gradient-to-r from-orange-custom-600 
         to-orange-custom-700"
      >
         <header>
            <div className="relative h-60">
               <Image className='object-cover' src={image} alt={title} fill />
            </div>
            <div className="pt-2 px-4">
               <h2 className={`m-0 text-2xl ${montSerrat.className}`}>{title}</h2>
               <p className='text-xs text-orange-custom-80'>by {creator}</p>
            </div>
         </header>
         <div className="flex flex-col justify-between h-full">
            <p className="pt-4 px-4">{summary}</p>
            <div className='p-4 text-right'>
               <Link 
                  href={`/meals/${slug}`}
                  className='inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r 
                  from-orange-custom-300 to-orange-custom text-white font-bold
                  no-underline hover:bg-gradient-to-r 
                  hover:from-orange-custom-100 hover:to-orange-custom-200 hover:shadow-custom4'
               >
                  View Details
               </Link>
            </div>
         </div>
      </article>
   );
}