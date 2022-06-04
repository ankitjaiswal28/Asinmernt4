import React, {useState} from "react";
import AddExpensesForm from "./AddExpensesForm";
import './AddExpenses.css';
const AddExpenses = (props) => {
    const [isBtttonClicked, setIsButtonClicked] = useState(false)
    const  saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsButtonClicked(false);
        
    }
    const buttonClickHandler =  () => {
        setIsButtonClicked(true);
    }
    const canclebuttonClickHandler = () => {
        setIsButtonClicked(false);
    }
    return (
        <div className="new-expense">
            {!isBtttonClicked && <button type="button" onClick={buttonClickHandler}>Add Button</button>}
            {isBtttonClicked && <AddExpensesForm onsaveExpenseData={saveExpenseDataHandler} onCancel={canclebuttonClickHandler}/>}
            
        </div>
    )

}
export default AddExpenses;