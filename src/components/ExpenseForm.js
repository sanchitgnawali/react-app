import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



export default class ExpenseForm extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount / 100 : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: undefined
        };

    }



    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}))
    };

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}))
    };

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({amount}))
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState(()=>({createdAt}));
    };

    onCalenderFocusChange =({focused}) => {
        this.setState( () => ({calenderFocused:focused}) )
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.amount || !this.state.description) {
            this.setState(()=>({error: 'Please Enter Description and Amount'}))
        }
        else {
            this.setState(()=>({error: undefined}))

            this.props.onSubmit({
               description: this.state.description,
               amount: parseFloat(this.state.amount)*100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>{this.state.error}</p>
                    <input
                        type="text"
                        placeholder='Description'
                        autoFocus
                        onChange={this.onDescriptionChange} value={this.state.description}/><br/>

                    <input type="text" placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange}/><br/>

                    <textarea
                        placeholder='Add a note (Optional)'
                        onChange={this.onNoteChange}
                        value = {this.state.note}>

                    </textarea><br/>
                    <button>Add Expense</button>

                    <SingleDatePicker
                        date= {this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onCalenderFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=>(false)}
                    />
                </form>

            </div>
        );
    }
}