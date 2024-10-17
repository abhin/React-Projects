import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import NotFound from "../pages/NotFound";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";
import RecipeLayout from "../pages/RecipeLayout";

export default function RoutesNavigation() {
  const nav = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/recipes",
      element: <RecipeLayout />,
      children: [
        {
          path: "/recipes",
          element: <Recipes />
        },
        {
          path: "recipe/:id",
          element: <RecipeDetails />,
        },
        {
          path: "recipe/:id/comments",
          element: <Comments /> 
        },
      ],
    },
  ]);
  return nav;
}
