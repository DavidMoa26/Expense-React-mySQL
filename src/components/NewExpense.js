import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    // get the new Expense from ExpenseForm
    const dataHandler = (getNewExpenseFromExpenseForm) => {
        const data = {
            ...getNewExpenseFromExpenseForm,
            id: Math.random().toString()
        }
        // send new expense to app component
        props.sendNewExpenseToApp(data);

    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSendDataToNewExpense={dataHandler} />
        </div>
    )
}

export default NewExpense