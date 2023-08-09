'use client'
import { useEffect, useState } from "react";
import Card from "./ components/Card";
import getRandomMeal from "@/lib/getRandomMeal";

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealPromises = Array.from({ length: 20 }, () => getRandomMeal());
        const responses = await Promise.all(mealPromises);
        const mealData = responses.map((response) => response.meals[0]);
        setMeals(mealData);
      } catch (error) {
        console.error("Error fetching meals", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <main className="container mx-auto text-center">
      {/* <h1 className="text-orange-500 text-3xl font-bold mb-10"><span>ጣት ሚያስቆረጥም</span> Recipe Book</h1> */}
      <div className="mx-auto max-w-md">
        <p className="text-gray-400 text-md italic mb-10">
          <span className="whitespace-nowrap">&ldquo;</span>
          Delight in Every Bite - Explore a World of Flavors.
          Discover the art of culinary magic with our curated collection of exquisite recipes.
          Let your taste buds embark on a journey of delight and enchantment.
          <span className="whitespace-nowrap">&rdquo;</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </main>
  );
  
}

