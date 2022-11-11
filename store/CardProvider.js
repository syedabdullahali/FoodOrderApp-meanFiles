import { useReducer } from "react"

import CartContext from "./cart-context"



const defaultCartState = {
    items:[],
    totalAmount:0
  }  
   
  const cartReduser  = (state,action)=> {
    if(action.type ==='ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price *
                                                       action.item.amount    
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }                                               
    }
    return defaultCartState
  }


const CardProvider = (props)=>{
 const [cartState, dispetchCartAction]=   useReducer(cartReduser, defaultCartState)

    const addItemToCardHandler = item =>{
        dispetchCartAction({type:'ADD',item:item})
    }
    const removeItemToCardHandler = id =>{
        dispetchCartAction({typeof:'REMOVE',id:id})
    }

    const cartContext = {
        item:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCardHandler,
        removeItme:removeItemToCardHandler
    };
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CardProvider