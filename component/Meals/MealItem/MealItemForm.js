import { useRef,useState } from 'react'
import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props =>{

 const [amountIsValid,setAmounIsValid]  = useState(true)

const amountInputRef = useRef()

const sumbitHandler = event =>{
 event.preventDefault()
 const enteredAmount = amountInputRef.current.value
 const enteredAmountNumber = +enteredAmount;

 if(
    enteredAmount.trim().length ===0 
    || enteredAmountNumber<1
    ||enteredAmountNumber >5){
      setAmounIsValid(false)
   return;     

 }
 props.onAddToCart(enteredAmountNumber);
}

return <form className={classes.form} onSubmit={sumbitHandler}>
    <Input label='Amount'
    ref={amountInputRef}
    input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}
    />
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
</form>
}

export default MealItemForm