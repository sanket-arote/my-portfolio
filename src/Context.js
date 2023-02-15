// createContext = create a context that components can provide or read.
// useReducer =  when the next state depends on the previous one.
import { createContext, useReducer } from "react";

export const themeContext = createContext();

// Initializing the State i.e. Dark or Normal

const intialState = {darkMode : true}

// to change the current theme
const themeReducer = (state, action) => {
    switch(action.type){
        case 'toggle':
            return{darkMode : !state.darkMode};
        default: 
            return state;
    }
};

// ThemeProvider
export const ThemeProvider = (props) =>{
    const[state, dispatch] = useReducer(themeReducer, intialState)
    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
};