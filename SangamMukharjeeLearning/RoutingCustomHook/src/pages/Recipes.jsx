import useApiFetch from "../CustomHooks/useFetchApi";

function RecipeComponent() {
  const { data, loading, error } = useApiFetch("https://dummyjson.com/recipes");

  if (error) return;

  return (
    <>
      <div>
        <h1>Recipes</h1>
        {(loading && <div>Loading...</div>) ||
          (error && <div>Error: {error}</div>) ||
          (data && (
            <div className="grid-container">
              {data?.recipes && data?.recipes?.length > 0 ? (
                data?.recipes?.map((recipe) => (
                  <div key={recipe?.id} className="grid-item">
                    <img src={recipe.image} style={{width: "150px", height: "150px"}}/>
                    <p>{recipe?.name}</p>
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
