import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import RecipeList from "../pages/RecipeList";
import RecipeLayout from "../pages/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails";
import NotFound from "../pages/NotFound";

export default function RoutesNavigation() {
  return (
    // Please see the example for useRoutes hook instead of  Routs, useRoutes hook example in ../../../RoutingCustomHook/src/components/RoutesNavigation.jsx
    <div>
      <Routes>
        <Route path="/recipes" element={<RecipeLayout />}>
          <Route path="list" element={<RecipeList />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
