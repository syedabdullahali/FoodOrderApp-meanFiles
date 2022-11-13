import { useReducer } from "react"

import CartContext from "./cart-context"

const defaultCartState = {
    items:[],
    totalAmount:0
  }  
   
  const cartReduser  = (state,action)=> {
    if(action.type ==='ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price *
                                                       action.item.amount    
      const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id)
                ;   
        const existingCartItem = state.items[existingCartItemIndex]     
        let updatedItems;                                         
                   
        if(existingCartItem){
           const updatedItem ={
            ...existingCartItem,
            amount:existingCartItem.amount + action.item.amount
           };
           updatedItems = [...state.items];
           updatedItems[existingCartItemIndex] = updatedItem
        } else{
             updatedItems = state.items.concat(action.item)


        }

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }                                               
    }

    if(action.type==='REMOVE'){

        const existingCartItemIndex = state.items.findIndex(
            (item)=> item.id === action.id
        )

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price  
        let updatedItems;
        if(existingItem.amount===1){
             updatedItems = state.items.filter(item=>item.id!== action.id)
        } else{
            const updatedItem = {...existingItem,amount:existingItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return{
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
        dispetchCartAction({type:'REMOVE',id:id})
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