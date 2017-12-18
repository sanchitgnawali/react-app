

//SET_TEXT_FILTER
export  const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
};

//SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByAmount=() => ({
    type: 'SORT_BY_AMOUNT'
});

export const setStartDate = (date)=> ({
    type: 'SET_START_DATE',
    startDate: date
});

export const setEndDate = (date)=> ({
    type: 'SET_END_DATE',
    endDate: date
});