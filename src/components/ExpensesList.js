import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
import Axios from 'axios'

const ExpensesList = (props) => {

    const [data, setData] = useState([]);

    Axios.get('https://expense-app.herokuapp.com/expenses')
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => { console.log(err) })

    return (
        <div className='expenses-list'>
            {data.length === 0 ? <p>No expenses found</p> :
                data.map(expense =>
                    <ExpenseItem id={expense.id} key={expense.id} item={expense.item} price={expense.price} date={expense.date} />
                )}
        </div>
    )
}

export default ExpensesList