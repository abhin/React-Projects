import { useReducer } from "react";

const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';

const initState = {
    showText: true,
    changeTextStyle: false,
};


function reducer(currState, action){
    switch (action.type) {
      case HIDE_TEXT:
        return {
            ...currState,
            showText: false
        };
    case SHOW_TEXT:
        return {
            ...currState,
            showText: true
        };
    case CHANGE_TEXT_STYLE:
        return {
            ...currState,
            changeTextStyle: !currState.changeTextStyle
        };
      default:
        return currState;
    }
}




function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer,initState);

    return (
        <>
            <div>
            <h1>UseReducer Hooks Example</h1>
            {state.showText && <p className={state.changeTextStyle && "dark" || "light" }>Play! Text</p>}
            {state.showText && <button onClick={() => {dispatch({type: HIDE_TEXT})}}>Hide Text</button>}
            {!state.showText && <button onClick={() => {dispatch({type: SHOW_TEXT})}}>Show Text</button>}
            {state.showText && <button onClick={() => {dispatch({type: CHANGE_TEXT_STYLE})}}>Change Text Styles</button>}
            </div>
        </>
    );
}

export default UseReducerExample;
