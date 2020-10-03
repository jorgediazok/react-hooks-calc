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
  //Alert
  const [alert, setAlert] = useState({ show: false });
  //Functionality
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
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
      handleAlert({ type: 'success', text: 'item added' });
      setCharge('');
      setAmount('');
    } else {
      //handle alert
      handleAlert({
        type: 'danger',
        text: `charge can not be an empty value and amount value has to be bigger than zero`,
      });
    }
  };

  return (
    <React.Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
