import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      404 This Page Does Not Found <br />
      <Link to={"/home"}> Got to Home </Link>
    </div>
  );
}
