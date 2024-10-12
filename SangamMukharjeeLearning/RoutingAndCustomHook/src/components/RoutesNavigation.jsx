import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";
import NotFound from "../pages/NotFound";

export default function RoutesNavigation() {
  return (
    <div>
      <Routes>
        <Route path="/recipes" element={<Layout />}>
          <Route path="list" element={<Recipes />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
