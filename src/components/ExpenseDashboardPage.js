import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import expenseTotal from '../selectors/expenses-total';
import ExpenseSummery from './ExpenseSummery';

const ExpenseDashboardPage = () => (

    <div>
        <ExpenseSummery/>        
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;