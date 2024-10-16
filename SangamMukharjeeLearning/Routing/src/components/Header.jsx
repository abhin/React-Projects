import { Outlet, useNavigate } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();
  return (
    <>
      
      <header>
        <h4>Recipes and Comments Site</h4>
        <button
          style={{ backgroundColor: "black", color: "white", margin: "5px" }}
          onClick={() => {
            nav("/home");
          }}
        >
          Home
        </button>
        <button
          style={{ backgroundColor: "black", color: "white", margin: "5px" }}
          onClick={() => {
            nav("/recipes/list");
          }}
        >
          Recipies
        </button>
        <button
          style={{ backgroundColor: "black", color: "white", margin: "5px" }}
          onClick={() => {
            nav("/comments");
          }}
        >
          Comments
        </button>
      </header>
      
    </>
  );
}
