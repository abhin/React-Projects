import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../pages/RecipeLayout";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import RecipeList from "../pages/RecipeList";
import RecipeLayout from "../pages/RecipeLayout";
import RecipeDetails from "../pages/RecipeDetails";
import NotFound from "../pages/NotFound";

export default function RoutesNavigation() {
  return (
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
