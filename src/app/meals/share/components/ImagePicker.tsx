'use client'

import Image from "next/image"
import { FormEvent, useRef, useState } from "react"

interface ImagePickerProps {
   label: string
   name: string
}

export default function ImagePicker({label, name}: ImagePickerProps) {
   const imageInputRef = useRef<HTMLInputElement>(null)
   const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null)

   const handlePickClick = () => {
      imageInputRef.current?.click()
   }

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if(!file) {
         setPickedImage(null)
         return
      }
      
      const fileReader = new FileReader()

      fileReader.onload = () => {
         setPickedImage(fileReader.result)
      }
      fileReader.readAsDataURL(file)
   }
   
   return (
      <div className="picker">
         <label htmlFor={name}>
            {label}
         </label>

         <div className="flex items-end gap-6 my-5">
            <div 
               className="w-40 h-40 border-2 border-solid border-button-image
               flex justify-center items-center text-center text-button-image relative
               cursor-pointer"
               onClick={handlePickClick}
            >
               {!pickedImage ? 
                  <p className="p-4">
                     No image picked yet.
                  </p> : 
                  <Image 
                     src={pickedImage.toString()} 
                     alt="The image selected by the user." 
                     fill
                     className="object-cover"
                  />
               }
            </div>

            <input 
               type="file" 
               id={name} 
               accept="image/png, image/jpeg"
               name={name}
               className="hidden" 
               ref={imageInputRef}
               onChange={handleImageChange}
               required
            />

            <button 
               className="py-2 px-6 bg-button-image rounded-sm cursor-pointer
               text-inherit hover:bg-button-hover-2 focus:bg-button-hover-2" 
               type="button"
               onClick={handlePickClick}
            >
               Pick an Image
            </button>
         </div>
      </div>
   )
}