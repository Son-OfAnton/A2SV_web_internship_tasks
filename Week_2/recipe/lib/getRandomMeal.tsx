const getRandomMeal = async () => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

  if(!res.ok) {
    throw new Error('Failed to fetch single meal')
  }

  return res.json()
}

export default getRandomMeal