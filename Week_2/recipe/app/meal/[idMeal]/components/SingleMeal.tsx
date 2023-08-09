import React from 'react'

type props = {
  promise: Promise<{ meals: Meal[] }>
}


const SingleMeal:React.FC<props> = async ({ promise }) => {
  const result = await promise
  const meal = result.meals[0]
  // console.log(meal)


  return (
    // meal info goes here
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="py-4 px-6">
        <h2 className="text-gray-800 text-2xl font-semibold">{meal.strMeal}</h2>
        <p className="text-gray-600 mt-2">{meal.strCategory} - {meal.strArea}</p>
        <p className="text-gray-800 text-md mt-2">{meal.strInstructions}</p>
        <h3 className="text-gray-800 text-lg font-semibold mt-4">Ingredients:</h3>
        <ul className="mt-2">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
            meal[`strIngredient${index}`] && (
              <li key={index} className="text-gray-600">{meal[`strIngredient${index}`]} - {meal[`strMeasure${index}`]}</li>
            )
          ))}
          {/* To address type problem for meal[`strIngredient${index}`] the following is added to types.d.ts [key: string]: string | null; */}
        </ul>
      </div>
    </div>
  
  )
}

export default SingleMeal