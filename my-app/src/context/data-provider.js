import { createContext, useReducer } from "react";

export const DataContext = createContext();

// Initially I put userInfo value to the value of userInfo available in localStorage
// if window.localStorage is empty then userInfo will be empty
// after login or signup of user both context and localStorage will get updated.

const initialState = {
    userInfo: JSON.parse(window.localStorage.getItem('userInfo'))
};

function reducer(state, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return { ...state, userInfo: action.payload };
        case 'USER_LOGOUT':
            return {};  // I made userInfo empty
        default:
            return state;
    }
}

const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;