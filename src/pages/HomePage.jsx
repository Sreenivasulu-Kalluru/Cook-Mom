import { Search } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { useEffect, useState } from 'react';
import { getRandomColor } from '../lib/utils';

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes('chicken');
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="flex items-center gap-2 shadow-md input">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-base grow"
              placeholder="What do you want to cook today"
            />
          </label>
        </form>

        <h1 className="mt-4 text-3xl font-bold md:text-5xl">
          Recommended Recipes
        </h1>
        <h3 className="my-2 ml-1 text-sm font-semibold tracking-tight text-slate-500">
          Popular choices
        </h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col w-full gap-4">
                <div className="w-full h-32 skeleton"></div>
                <div className="flex justify-between">
                  <div className="h-4 skeleton w-28"></div>
                  <div className="h-4 skeleton w-28"></div>
                </div>
                <div className="w-1/2 h-4 skeleton"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
