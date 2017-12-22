import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default expenses state',()=>{
    const action = expensesReducers(undefined,{type:'@@INIT'});
    expect(action).toEqual([]);
});

test('should remove an expense',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const removeExpense = expensesReducers(expenses,action);
    expect(removeExpense).toEqual([expenses[1],expenses[2]]);
});

test('should not remove an expense when id is invalid',()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '34'
    };
    const removeExpense = expensesReducers(expenses,action);
    expect(removeExpense).toEqual(expenses);
})

test('add expense',()=>{
    const expense = {
        id: '4',
        createdAt: 0,
        amount: 45,
        description: 'test expense',
        note: 'note'
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const addExpense = expensesReducers(expenses,action);
    expect(addExpense).toEqual([...expenses,expense]);
});

test('should edit expense when id is available',()=>{
    const updates= {
        description: 'Break Fast'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };

    const editExpense = expensesReducers(expenses,action);
    expect(editExpense[0].description).toBe('Break Fast');
});


test('should not edit expense when id is unavailable',()=>{
    const updates= {
        description: 'Break Slow'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates
    };

    const editExpense = expensesReducers(expenses,action);
    expect(editExpense).toEqual(expenses);
});