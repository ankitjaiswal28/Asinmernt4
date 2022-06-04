import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card';
const ExpenseIem = (props) => {
  const [title, setTitle] = useState(props.title)
  const changeTitleHandler = () => {
    setTitle('Updated State')
    console.log('Clicked!!')
  }
    
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Chnage Title</button>
    </Card>
  );
}
export default ExpenseIem;
