import React, { useState } from "react";
import "./AddExpensesForm.css";
const AddExpensesForm = (props) => {
  // Multiple Sate Handler
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
 const cancleHandler = () => {
   props.onCancel();
 }
  const titleChngeHandler = (event) => {
    // When We use Multiple Sate
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // When We use Multiple Sate
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // When We use Multiple Sate
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); // to Stop reloading
    // When We use Multiple Sate
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onsaveExpenseData(expenseData);
    setEnteredTitle(''); // Reset the Sate.
    setEnteredAmount(''); // Reset the  Sate
    setEnteredDate('');// Reset The Sate
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChngeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancleHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default AddExpensesForm;
