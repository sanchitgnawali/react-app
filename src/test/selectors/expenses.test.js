// import selectExpenses from '../../selectors/expenses';
//
// const expenses = [{
//     id: '1',
//     description: 'rent',
//     note: 'simple note',
//     amount: 2300,
//     createdAt: 20
// },{
//     id: '2',
//     description: 'family',
//     note: 'another note',
//     amount: 2300,
//     createdAt: 30
// },{
//     id: '3',
//     description: 'work',
//     note: 'note too',
//     amount: 2300,
//     createdAt: 60
// }];
//
//
//
// test('should filter by text', () => {
// //text,sortBy,startDate,endDate
//     const filters = {
//         text: 'e',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: undefined
//     };
//
//     const result = selectExpenses(expenses,filters);
//
//     expect(result).toEqual([expenses[1]]);
//
// });

import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});