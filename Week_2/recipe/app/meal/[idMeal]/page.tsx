import React, { Suspense } from "react"
import SingleMeal from "./components/SingleMeal"
import getSingleMeal from "@/lib/getSingleMeal"

type params = {
  params: {
    idMeal: number 
  }
}

const sinlgeMealPage: React.FC<params> = async ({ params: {idMeal}}) => {
  const mealData: Promise<{ meals: Meal[] }> = getSingleMeal(idMeal)

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <SingleMeal promise={mealData} />
    </Suspense>
  )
}

export default sinlgeMealPage