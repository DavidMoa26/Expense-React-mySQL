import { useState, useEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
import Axios from 'axios'

const ExpensesList = (props) => {

    const [data, setData] = useState(props.items);

    useEffect(() => {
        setData(props.items)
    }, [props]);



    const getId = (id) => {
        const filteredExpenses = data.filter(expense => expense.id !== id);
        setData(filteredExpenses);
        Axios.delete(`https://expense-app.herokuapp.com//delete/${id}`,).then((response) => {
            console.log(response);
        })
            .catch((err) => { console.log(err) })
    }




    return (
        <div className='expenses-list'>
            {props.items.length === 0 ? <p>No expenses found</p> :
                data.map(expense =>
                    <ExpenseItem id={expense.id} key={expense.id} item={expense.item} price={expense.price} date={expense.date} onGetIdHandler={getId} />
                )}
        </div>
    )
}

export default ExpensesList