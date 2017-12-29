import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import expenses from '../selectors/expenses';

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpenseTotal}</h1>
        </div>
    );
}

const mapStateToProps=(state) => {
   const visibleExpenses = expenses(state.expenses,state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal:  expensesTotal(visibleExpenses)    
    }
   
}

export default connect(mapStateToProps)(ExpenseSummary);