import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{

    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should sort by date',()=>{
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>{
    const state = filtersReducer(undefined,{text: 'sth',type:'SET_TEXT_FILTER'});
    expect(state.text).toBe('sth');
});

test('should set start date',()=>{
    const state = filtersReducer(undefined,{type: 'SET_START_DATE',startDate: moment(24).valueOf()})
    expect(state.startDate).toBe(moment(24).valueOf());
});

test('should set end date',()=>{
    const state = filtersReducer(undefined,{type: 'SET_END_DATE',endDate: moment(100).valueOf()});
    expect(state.endDate).toBe(moment(100).valueOf());
});