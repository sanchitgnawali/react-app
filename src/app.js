import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description:'water bill',amount:4500,createdAt:1098}));
store.dispatch(addExpense({description:'apartment rent',amount:200,createdAt:4003}));
store.dispatch(addExpense({description:'gas bill',amount:140,createdAt:5032}));




const state = store.getState();
console.log(getVisibleExpenses(state.expenses,state.filters));

const jsx = (
    <Provider store={store}>
     <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
