import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import NotFound from "../pages/NotFound";
import RecipeLayout from "../pages/RecipeLayout";
import RecipeList from "../pages/RecipeList";
import RecipeDetails from "../pages/RecipeDetails";

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
      path: "/comments",
      element: <Comments />,
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
          path: "list",
          element: <RecipeList />,
        },
        {
          path: "recipe/:id",
          element: <RecipeDetails />,
        },
      ],
    },
  ]);
  return nav;
}
