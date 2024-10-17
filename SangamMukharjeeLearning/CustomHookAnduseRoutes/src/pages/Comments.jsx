import { Link, useParams } from "react-router-dom";
import useApiFetch from "../CustomHooks/useFetchApi";

export default function Comments() {
  const params = useParams();
  const { id } = params;

  const { data, loading, error } = useApiFetch(
    `https://dummyjson.com/comments/${id}`
  );
  
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Recipe Comment</div>
        <div className="card-body">
          <h5 className="card-title">{data?.user.fullName}</h5>
          <p className="card-text">
          <b>Comment:</b> {data?.body}
          </p>
          <p className="card-text">
          <b>Likes:</b> {data?.likes}
          </p>
          <Link to={`/recipes/recipe/${id}`} className="btn btn-primary">
            Back to Recipe
          </Link>
        </div>
      </div>
    </>
  );
}
