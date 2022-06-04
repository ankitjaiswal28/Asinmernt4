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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={selectedYear}
          onFilterChange={changeFilterHandler}
        />
        <ExpensesList expenseList={filteredExpense} selectedYear={selectedYear} />
      </Card>
    </div>
  );
};
export default NewExpenses;
