/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import './Expenses.css'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

    const [year, setYear] = useState('All');

    const selectedYear = (selectedYear) => {
        setYear(selectedYear);
    }




    const filteredArray = year !== 'All' && props.data.filter(expense => expense.date.getFullYear().toString() === year) || props.data.map(expense => expense);


    return (
        <Card className='expenses'>
            <ExpenseFilter onYear={selectedYear} selected={year} />
            <ExpensesChart data={filteredArray} />
            <ExpensesList items={filteredArray} />
        </Card>
    )
}

export default Expenses