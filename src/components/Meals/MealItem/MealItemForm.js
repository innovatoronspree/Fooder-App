import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  //We extract thr input into a reusable component
  //We are adding the default props of the input element
  //in the object and passing it as input prop
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    console.log(enteredAmountNumber+" Hello");
    
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 ||
    enteredAmountNumber > 5){
        setAmountIsValid(false);
        return;
    }

    //We will not add the item here itself
    //beacuse we need more data i.e. the id, number etc.
    props.onAddToCart(enteredAmountNumber);


  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
