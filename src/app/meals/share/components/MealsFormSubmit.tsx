'use client'

import { useFormStatus } from "react-dom"


export default function MealsFormSubmit() {
   const { pending } = useFormStatus()

   return (
      <button 
         type="submit"    
         className="border-0 py-3 px-8 bg-gradient-to-r from-orange-custom-300 
            to-orange-custom text-white rounded-sm cursor-pointer
            text-inherit text-xl shadow-custom5 hover:from-orange-custom-100
            hover:to-orange-custom-200 focus:from-orange-custom-100
            focus:to-orange-custom-200 disabled:bg-disabled disabled:text-disabled2
            disabled:cursor-not-allowed"
            disabled={pending}
         >
            {pending ? 'Submitting...' : 'Share Meal'}
      </button>
   )
}