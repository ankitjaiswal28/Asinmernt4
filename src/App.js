// import logo from "./logo.svg";
import React, {useState} from "react";
import "./App.css";
import AddExpenses from "./components/AddExpenses";
import NewExpenses from "./components/NewExpenses";

const defualtExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

const App = () => {
  const [expenses, setExpenses]= useState(defualtExpense);
  const addExpnseHandler = (expense) => {
    console.log("Input value", expense);
    setExpenses((preveiousExpense) => {
      // console.log('preveiousExpense', preveiousExpense)
      return [expense ,...preveiousExpense];
    });
  };
  return (
    <div>
      <AddExpenses onAddExpense={addExpnseHandler} />
      <NewExpenses items={expenses} />
    </div>
  );
};

export default App;
