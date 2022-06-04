import React from "react";
import ExpenseIem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  let noExpenseItemValue = <p>No Expense Found in </p>;
  if (props.expenseList.length === 0) {
    return <h1 className="expenses-list__fallback ">Expense Not Found in {props.selectedYear}</h1>;
  }
  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense) => (
        <ExpenseIem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
