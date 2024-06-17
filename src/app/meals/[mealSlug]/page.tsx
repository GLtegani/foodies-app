interface SlugMealsAttributes {
   mealSlug: string
}


interface SlugMealsProps {
   params: SlugMealsAttributes
}

export default function MealDetailsPage({params}: SlugMealsProps) {
   return (
      <h1>{params.mealSlug}</h1>
   )
}