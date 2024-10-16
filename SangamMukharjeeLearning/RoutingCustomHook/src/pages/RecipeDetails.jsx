import { useParams } from "react-router-dom";
import useApiFetch from "../CustomHooks/useFetchApi";

export default function RecipeDetails() {
  const params = useParams();
  const { id } = params;

  const { data, loading, error } = useApiFetch(
    `https://dummyjson.com/recipes/${id}`
  );

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Recipe Details</div>
        <div className="card-body">
          <h5 className="card-title">{data?.name}</h5>
          <p className="card-text">
          <b>Ingredients:</b> {data?.ingredients}
          </p>
          <p className="card-text">
          <b>Instructions:</b> {data?.instructions}
          </p>
          <a href="#" className="btn btn-primary">
            Veiw Comments
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
}
