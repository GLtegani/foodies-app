import Link from "next/link";
import { Montserrat } from "next/font/google";
import ImageSlideshow from "./components/ImageSlides";

const montSerrat = Montserrat({subsets: ["latin"]});


export default function Home() {
  return (
    <>
      <header className="flex gap-12 mt-12 mx-auto w-90% max-w-6xl">
        <div className="w-130 h-97">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-white-300 text-2xl">
            <h1 className={`text-4xl font-bold ${montSerrat.className} tracking-sm uppercase
              bg-gradient-to-r from-orange-custom-300 to-orange-custom-400 bg-clip-text
              text-transparent mt-12% mb-6`
            }>
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="text-2xl flex gap-4 mt-7">
            <Link 
              href='/community'
              className="inline-block mt-4 py-2 pr-4 pl-0 rounded-lg 
              font-normal no-underline bg-transparent text-orange-custom 
              hover:text-orange-custom-200" 
            >
              Join the Community
            </Link>
            <Link 
              href='/meals'
              className="inline-block mt-4 py-2 px-4 rounded-lg 
              bg-gradient-to-r from-orange-custom-300 to-orange-custom text-white
              font-bold no-underline hover:bg-gradient-to-r hover:from-orange-custom-100 
              hover:to-orange-custom-200
              active:bg-gradient-to-r active:from-orange-600 active:to-yellow-500" 
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className='flex flex-col text-white-300 text-2xl max-w-152 w-11/12 mb-28 mt-16 mx-auto text-center'>
            <h2 className="text-4xl font-bold mb-10">
              How it works
            </h2>
            <p className="mb-10">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>

          <section className='flex flex-col text-white-300 text-2xl max-w-152 w-11/12 my-8 mx-auto text-center'>
            <h2 className="text-4xl font-bold mb-10">
              Why NextLevel Food?
            </h2>
            <p className="mb-10">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It&apos;s a place to discover new dishes, and to
              connect with other food lovers.
            </p>
            <p>
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </section>
      </main>
    </>
  )
}
