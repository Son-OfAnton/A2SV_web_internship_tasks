const getSingleMeal = async (idMeal: number) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

  if(!res.ok) {
    throw new Error('Failed to fetch single meal')
  }

  return res.json()
}

export default getSingleMeal