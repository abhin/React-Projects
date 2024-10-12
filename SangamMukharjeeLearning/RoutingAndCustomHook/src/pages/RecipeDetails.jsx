import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1> Recipe Details</h1>
      <p>{id}</p>
    </div>
  );
}
