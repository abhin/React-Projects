import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

function ChildContextButton() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <>
      <button
        onClick={() => setTheme((theme !== "light" && "light") || "dark")}
      >
        Change Theme
      </button>
    </>
  );
}

export default ChildContextButton;
