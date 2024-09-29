import { useContext } from "react";
import { globalContext } from "../GlobalContext/GlobalContext";

function ChildContextText() {
  const { theme } = useContext(globalContext);
  return (
    <>
      <h1 className={theme}>Change text</h1>
    </>
  );
}

export default ChildContextText;
