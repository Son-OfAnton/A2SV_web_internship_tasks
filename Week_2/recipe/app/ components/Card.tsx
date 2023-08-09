import Link from "next/link";

interface CardProps {
  meal: Meal;
}

const Card: React.FC<CardProps> = ({ meal }) => {
  return (
    <Link href={`/meal/${meal.idMeal}`} className="bg-orange-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="text-white p-4">
        <h2 className="text-lg">{meal.strMeal}</h2>
      </div>
    </Link>
  );
};

export default Card;
