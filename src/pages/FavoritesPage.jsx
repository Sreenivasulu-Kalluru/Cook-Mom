import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from '../lib/utils';

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="my-4 text-3xl font-bold md:text-5xl">My Favorites</h2>

        {favorites.length === 0 && (
          <div>
            <h3>No favorites recipes found! Please add some.</h3>
            <Link
              to="/"
              className="mt-4 text-gray-400 transition-all hover:underline"
            >
              &larr; Back to Home Page
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
