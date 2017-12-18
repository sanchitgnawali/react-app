import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

//testing add_expense
test('should remove expense action object',()=>{
    const action = removeExpense({id: '123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

//testing edit_expense

test('should edit expense',()=>{
    const action = editExpense('123maybe',{description:'this is a test'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123maybe',
        updates: {description:'this is a test'}
    });
});

//ad_expense when user provided values are passed

test('should set up add_expense when user passes data in',()=>{

    const expense = {
        description:'test',
        note:'note',
        amount:12300,
        createdAt:1500
    };
    const action = addExpense(expense);
    expect(action).toEqual({
       type: 'ADD_EXPENSE',
        expense: {
           id: expect.any(String),
            ...expense
        }
    });
});

//add_expense with no data
test('should set add_expense when no data is passed',()=> {

    const expected = {
        description:'',
        note: '',
        amount:0,
        createdAt: 0
    }

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense :  {
            id: expect.any(String),
            ...expected
        }
    });
});