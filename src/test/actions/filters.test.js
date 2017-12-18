import moment from 'moment';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

//this should check the functionality of setStartDate
test('should set start date filter',()=>{

    const action = setStartDate(moment(0));
    expect(action).toEqual({
       type : 'SET_START_DATE',
       startDate: moment(0)
    });

});

//This should set end Date filter
test('should set end date filter',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

//this should see if it sets text filter when the user provides  value
test('should set text filter when user provides a value',()=>{
   const action = setTextFilter('hi');
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'hi'
   });
});
//this should see if it sets text filter when the user provides no value

test('should set text filter when user provides no value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    });
});

//this should check if it sorts by amount
test('should sort by amount',()=>{
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

//this should check if it shorts by date
test('should sort by date',()=>{
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});



