import React, { useState } from 'react'
import './ExpenseForm.css'
import Axios from 'axios'

const ExpenseForm = (props) => {

    // create states for input form
    const [newItem, setItem] = useState('')
    const [newAmount, setAmount] = useState('')
    const [newDate, setDate] = useState('')



    // create handlers for input form - use onChange
    const itemHandler = (e) => {
        setItem(e.target.value)
    }
    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    // submit
    const submitHandler = (e) => {
        e.preventDefault();
        // create object to store the data from the states
        const data = {
            item: newItem,
            price: newAmount,
            date: new Date(newDate)
        }




        Axios.post('https://expense-app.herokuapp.com/post', {
            item: data.item,
            price: data.price,
            date: new Date(newDate)

        }).then((response) => {
            console.log(response);

        })



        // send new expense to NewExpense component
        props.onSendDataToNewExpense(data);

        // clean form inputs after submit
        setItem('')
        setAmount('')
        setDate('')
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={newItem} onChange={itemHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={newAmount} onChange={amountHandler} required min='0.00' step='0.01' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={newDate} onChange={dateHandler} required />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default ExpenseForm