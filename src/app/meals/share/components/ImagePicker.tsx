'use client'

import { useRef } from "react"

interface ImagePickerProps {
   label: string
   name: string
}

export default function ImagePicker({label, name}: ImagePickerProps) {
   const imageInputRef = useRef<HTMLInputElement>(null)

   const handlePickClick = () => {
      imageInputRef.current?.click()
   }
   
   return (
      <div className="picker">
         <label htmlFor={name}>
            {label}
         </label>

         <div className="flex items-start gap-6 mb-4">
            <input 
               type="file" 
               id={name} 
               accept="image/png, image/jpeg"
               name={name}
               className="hidden" 
               ref={imageInputRef}
            />

            <button 
               className="py-2 px-6 bg-button-image rounded-sm cursor-pointer
               text-inherit hover:bg-button-hover-2 focus:bg-button-hover-2
               mt-5" 
               type="button"
               onClick={handlePickClick}
            >
               Pick an Image
            </button>
         </div>
      </div>
   )
}