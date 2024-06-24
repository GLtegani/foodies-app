'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

interface ShareMealProps {
   title: string
   image: File
   summary: string
   instructions: string
   creator: string
   creator_email: string
}

export const shareMeal = async (formData: FormData) => {
   const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
   }

   await saveMeal(meal as ShareMealProps)
   redirect('/meals')
}
