import React, { createContext, useReducer, useMemo } from 'react'

export const FavContext = createContext();

export const FavoriteContext = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const tempstate = state.filter(item => action.payload.id === item.id)

                if (tempstate.length > 0) {

                        return state;
                 
                } else {
                    return [...state, action.payload];

                }
            case 'REMOVE':
                const tempstate3 = state.filter(item => action.payload.id !== item.id);
                return tempstate3;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, [])
    const info = { state, dispatch }
    return (

        <FavContext.Provider value={useMemo(() => info, [state])}>{props.children}</FavContext.Provider>
    )

}
