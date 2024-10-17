import { Link } from "react-router-dom";
import useApiFetch from "../CustomHooks/useFetchApi";
import useResizeWindow from "../CustomHooks/useResizeWindow";

function RecipeComponent() {
  const { data, loading, error } = useApiFetch("https://dummyjson.com/recipes");
  const windowSize = useResizeWindow();

  if (error) return;

  return (
    <>
      <div>
        <h1>Recipes</h1>
        <h3>Current Window Size are Width: {windowSize.width}, Height: {windowSize.height}</h3>
        {(loading && <div>Loading...</div>) ||
          (error && <div>Error: {error}</div>) ||
          (data && (
            <div className="grid-container">
              {data?.recipes && data?.recipes?.length > 0 ? (
                data?.recipes?.map((recipe) => (
                  <div key={recipe?.id} className="grid-item">
                    <Link to={`/recipes/recipe/${recipe?.id}`}>
                    <img src={recipe.image} style={{width: "150px", height: "150px"}}/>
                    <p>{recipe?.name}</p>
                    </Link>
                  </div>
                ))
              ) : (
                <li>No recipes found.</li>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default RecipeComponent;
