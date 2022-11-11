import  React from  'react'

const CartContext = React.createContext({
    item:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItme:(id)=>{}

})

export default CartContext