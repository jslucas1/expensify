import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const text = 'Test Filter';
    const action = {
        type: 'SET_TEXT_FILTER', 
        text: text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const newDate = moment().subtract(10,'days');
    const action = {
        type: 'SET_START_DATE', 
        startDate: newDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(newDate);
});

test('should set end date filter', () => {
    const newDate = moment().add(10,'days');
    const action = {
        type: 'SET_END_DATE', 
        endDate: newDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(newDate);
});