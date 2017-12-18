import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';



//ADD_EXPENSES
const addExpense = ({description = '',note='',amount=0,createdAt=0}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id})=> ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});
//edit_expense
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
        text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount=() => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (date)=> ({
    type: 'SET_START_DATE',
    startDate: date
});

const setEndDate = (date)=> ({
    type: 'SET_END_DATE',
    endDate: date
});

//GET-VISIBLE-EXPENSES
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;

        //TO_CHECK_IF_DESCRIPTION INCLUDES_TEXT
        // const foundText = (text) => {
        //     text = text.toLowerCase();
        //     const description = expense.description.toLowerCase();
        //     console.log(text);
        //     return description.includes(text);
        // }

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy ==='date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy ==='amount') {
            return a.amount < b.amount ? -1:1;
        }
    });

}

//reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState,action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>(id !== action.expense.id))
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else return state;
            })
        default:
            return state;
    }
};




//filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: 'undefined',
    endDate: 'undefined'
};

const filterReducer = (state=filterReducerDefaultState,action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(()=> {
    var state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

//--------ACTIONS------------
const expenseOne = store.dispatch(addExpense({
    description: 'Monthly Rent',
    note: 'just a note',
    amount: 100,
    createdAt: 340
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Insurance fees',
    note: 'It is just a insurance fee',
    amount: 15,
    createdAt: 11
}));

// //REMOVE_EXPENSE
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// //EDIT_EXPENSE
// store.dispatch(editExpense(expenseTwo.expense.id,{description: 'insurance money',note:'its a note',amount: 200}));
//
// //SET_TEXT_FILTER
// store.dispatch(setTextFilter('test'));
//
// store.dispatch(setTextFilter())
//
// //SORT_BY_DATE
// store.dispatch(sortByDate());
//
// //SORT_BY_AMOUNT
store.dispatch(sortByAmount());

//SET_START_DATE
// store.dispatch(setTextFilter())
// store.dispatch(setStartDate(124));
// store.dispatch(setEndDate(1240));
const demoState = {
    expenses: [{
        id: 'asdfljlasdj',
        description: 'Janaury rent',
        note: 'this was the final payment for that address ',
        amount: 45000,
        createdAt: 0
    }],
    filters: {
        text: 'tent,',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
