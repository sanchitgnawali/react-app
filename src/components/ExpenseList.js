import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div className='ExpenseList'>
        <h1>Expense List</h1>
            {props.expenses.map((expense)=>(
               <ExpenseListItem {...expense} key={expense.id}/>
            ))}
    </div>
);

const stateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
};

export default connect(stateToProps)(ExpenseList);
