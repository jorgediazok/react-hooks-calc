import React from 'react';
import { MdDelete } from 'react-icons/md';
import Item from './ExpenseItem';

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <React.Fragment>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Clear Expenses<MdDelete className="btn-icon"></MdDelete>
        </button>
      )}
    </React.Fragment>
  );
};

export default ExpenseList;
