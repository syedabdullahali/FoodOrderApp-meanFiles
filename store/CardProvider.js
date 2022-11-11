import CartContext from "./cart-context"

const CardProvider = (props)=>{
   
    const addItemToCardHandler = item =>{}
    const removeItemToCardHandler = id =>{}

    const cartContext = {
        item:[],
        totalAmount:0,
        addItem:addItemToCardHandler,
        removeItme:removeItemToCardHandler
    };
    
    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
}

export default CardProvider