import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import configureStore from './store/configureStore';
import getVisableExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));
console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisableExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
