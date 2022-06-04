import React, { useState } from "react";
import "./NewExpenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const NewExpenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const changeFilterHandler = (parameter) => {
    setSelectedYear(parameter);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  /*let noExpenseItemValue = <p>No Expense Found in  {selectedYear}</p>;
  if (filteredExpense.length > 0) {
    noExpenseItemValue = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }*/
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={selectedYear}
          onFilterChange={changeFilterHandler}
        />
        \{/* 1) Trinary Oprator */}
        {/* {filteredExpense.length === 0 ? <p>No Expense Found</p> : filteredExpense.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />        
      ))} */}
        {/* 2) Stand Alone Method */}
        {/* {filteredExpense.length === 0 && <p>No Expense Found</p>}
      {filteredExpense.length > 0 && filteredExpense.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />        
      ))} */}
        {/* 3) Basic Js Function */}
        {/* {noExpenseItemValue} */}
        <ExpensesList expenseList={filteredExpense} selectedYear={selectedYear} />
      </Card>
    </li>
  );
};
export default NewExpenses;
