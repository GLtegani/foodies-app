import Image from 'next/image';
import mealIcon from '../../../assets/icons/meal.png';
import communityIcon from '../../../assets/icons/community.png';
import eventsIcon from '../../../assets/icons/events.png';
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({subsets: ["latin"]});
 

export default function CommunityPage() {
   return (
      <>
         <header 
            className="mt-12 mx-auto mb-20 w-90% max-w-6.5xl text-white-300
            text-2xl text-center"
         >
            <h1 className={`${montSerrat.className} text-5xl font-bold mb-7`}>
               One shared passion: <span className="bg-gradient-to-r from-orange-custom-300 
               to-orange-custom-500 bg-clip-text text-transparent">Food</span>
            </h1>
            <p>Join our community and share your favorite recipes!</p>
         </header>
         <main className="w-90% max-w-130 my-0 mx-auto text-center">
            <h2 className={`${montSerrat.className} text-4xl mb-12 text-white-300`}>
               Community Perks
            </h2>

            <ul className='list-none my-12 mx-0 p-0'>
               <li className='flex flex-col items-center gap-8'>
                  <Image 
                     src={mealIcon} 
                     alt="A delicious meal"
                     className='w-32 h-32 object-contain'
                     priority 
                  />
                  <p className={`${montSerrat.className} text-2xl font-bold m-0 text-white-300`}>
                     Share & discover recipes
                  </p>
               </li>
               <li className='flex flex-col items-center gap-8'>
                  <Image 
                     src={communityIcon} 
                     alt="A crowd of people, cooking"
                     className='w-32 h-32 object-contain'
                     priority 
                  />
                  <p className={`${montSerrat.className} text-2xl font-bold m-0 text-white-300`}>
                     Find new friends & like-minded people
                  </p>
               </li>
               <li className='flex flex-col items-center gap-8'>
                  <Image
                     src={eventsIcon}
                     alt="A crowd of people at a cooking event"
                     className='w-32 h-32 object-contain'
                     priority
                  />
                  <p className={`${montSerrat.className} text-2xl font-bold m-0 text-white-300`}>
                     Participate in exclusive events
                  </p>
               </li>
            </ul>
         </main>
      </>
   );
}