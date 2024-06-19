import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '../../../../assets/burger.jpg';
import curryImg from '../../../../assets/curry.jpg';
import dumplingsImg from '../../../../assets/dumplings.jpg';
import macncheeseImg from '../../../../assets/macncheese.jpg';
import pizzaImg from '../../../../assets/pizza.jpg';
import schnitzelImg from '../../../../assets/schnitzel.jpg';
import tomatoSaladImg from '../../../../assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';

const images = [
   { src: burgerImg, alt: 'A delicious, juicy burger' },
   { src: curryImg, alt: 'A delicious, spicy curry' },
   { src: dumplingsImg, alt: 'Steamed dumplings' },
   { src: macncheeseImg, alt: 'Mac and cheese' },
   { src: pizzaImg, alt: 'A delicious pizza' },
   { src: schnitzelImg, alt: 'A delicious schnitzel' },
   { src: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
         );
      }, 5000);

      return () => clearInterval(interval);
   }, []);

   return (
      <div className='relative w-full h-full rounded-lg overflow-hidden shadow-custom2'>
         {images.map((image, index) => (
            <Image
               key={index}
               src={image.src}
               className={
                  `w-full h-full object-cover absolute top-0 left-0 opacity-0 scale-110 -rotate-5 -translate-x-4
                  ${index === currentImageIndex ? `z-10 opacity-100 scale-100 translate-x-0 rotate-0` : ''}`
               }
               alt={image.alt}
            />
         ))}
      </div>
   );
}