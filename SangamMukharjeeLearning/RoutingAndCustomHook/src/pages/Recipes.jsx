import { Link, useNavigate } from "react-router-dom";

export default function Recipes() {
  const nav = useNavigate();
  return (
    <>
      <h3>Recipes List Page</h3>
      <ul>
        <li>
          <Link to={"/recipes/recipe/Cheese Burger"}>Cheese Burger</Link>
        </li>

        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              nav("/recipes/recipe/Egg Omlete");
            }}
          >
            Egg Omlete
          </a>
        </li>
      </ul>
    </>
    
  );
}
