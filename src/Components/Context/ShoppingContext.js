import React, { createContext, useReducer, useMemo } from 'react'

export const CartContext = createContext();

export const ShoppingContext = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const tempstate = state.filter(item => action.payload.id === item.id)

                if (tempstate.length > 0) {

                    // return state.reduce((prev, current) => {
                    //     if (prev.quantity) {
                    //         return prev.quantity + prev.quantity;
                    //     }
                    //     return prev + current.quantity;
                        
                    // })

                    state.map(item => {
                        
                        if (item.id === action.payload.id) {
                            return { ...item, quantity: item.quantity + 1 }
                        } else {
                            return item;
                        }
                    });
                } else {
                    return [...state, action.payload];

                }
            case 'INCREACE':
                const tempstate1 = state.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                });
                return tempstate1;
            case 'DECREASE':
                const tempstate2 = state.map((item, index) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity < 1 ? (item.quantity = 0) : (item.quantity - 1) }
                    } else {
                        return item;
                    }
                });
                return tempstate2;
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

        <CartContext.Provider value={useMemo(() => info, [state])}>{props.children}</CartContext.Provider>
    )

}
