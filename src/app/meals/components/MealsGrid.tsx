import MealItem from "./MealItem"

interface MealsProps {
   id: string
}

interface MealsGridProps {
   meals: MealsProps
}

export default function MealsGrid({meals}: MealsGridProps) {
   return (
      <ul 
         className="w-90% max-w-8xl grid grid-cols-[auto-fill] gap-20 min-w-80 flex-1
         my-8 mx-auto list-none p-0"
      >
         {meals.map(meal => {
            <li key={meal.id}>
               <MealItem {...meal}/>
            </li>
         })}
      </ul>
   )
}