import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1}={}) => ({
   type: 'INCREMENT',
    incrementBy
});

const decrementBy = ({decrementBy=1} = {}) => ({
    type: 'DECREMENT',
        decrementBy
});

const set = ({count=1}={})=>({
    type: 'SET',
    count
});

const reset = () =>({
    type: 'RESET'
});

const countReducer = (state = {count: 0},action)=>{

    switch (action.type) {

        case 'INCREMENT':
            console.log('incremented');

            return {
                count:  state.count+action.incrementBy
            };

        case 'DECREMENT':
            console.log('decremented');
            return {
                count: state.count-action.decrementBy
            };

        case 'RESET':
            console.log('reset value');
            return {
                count: 0
            };
        case 'SET':
            console.log('set called');
            return {
                count: action.count
            }
        default:
            return state;

    }

};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 6
// });

store.dispatch(incrementCount({incrementBy: 5}));
// unsubscribe();
store.dispatch(decrementBy({decrementBy: 2}));
store.dispatch(decrementBy({decrementBy: 2}));
store.dispatch(set({count:34}))
store.dispatch(reset());

console.log(store.getState().count)

