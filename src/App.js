import React, { useState } from 'react';
import './App.css';

import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  { id: uuidv4(), charge: 'rent', amount: 1600 },
  { id: uuidv4(), charge: 'car payment', amount: 400 },
  { id: uuidv4(), charge: 'credit card', amount: 1200 },
];

function App() {
  //State Values (All expenses, add expense)
  const [expenses, setExpenses] = useState(initialExpenses);
  //State values (single expense, amount expense)
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  //Functionality
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > '0') {
      const singleExpense = {
        id: uuidv4(),
        charge: charge,
        amount: amount,
      };
      // @ts-ignore
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');
    } else {
      //handle alert
    }
  };

  return (
    <React.Fragment>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            // @ts-ignore
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </React.Fragment>
  );
}
export default App;
