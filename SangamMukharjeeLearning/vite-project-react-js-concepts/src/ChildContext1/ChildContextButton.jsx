import { useContext } from "react";
import { globalContext } from "../GlobalContext/GlobalContext";

function ChildContextButton() {
  const { theme, setTheme } = useContext(globalContext);
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
