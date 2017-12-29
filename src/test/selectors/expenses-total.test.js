import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses exist',() => {
    expect(getTotalExpenses([])).toBe(0);
});

test('should add up single expense',()=>{
    const result = getTotalExpenses([expenses[0]]);
    expect(result).toBe(195);
});

test('should add up all the expenses',()=>{
    expect(getTotalExpenses(expenses)).toBe(114195);
});