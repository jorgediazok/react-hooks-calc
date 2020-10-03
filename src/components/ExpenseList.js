import React from 'react';
import { MdDelete } from 'react-icons/md';
import Item from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <React.Fragment>
      <ul className="list">
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          Clear Expenses<MdDelete className="btn-icon"></MdDelete>
        </button>
      )}
    </React.Fragment>
  );
};

export default ExpenseList;
