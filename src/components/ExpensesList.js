import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
import Axios from 'axios'

const ExpensesList = (props) => {

    const [data, setData] = useState(props.items);


    const getId = (id) => {

        Axios.delete(`https://expense-app.herokuapp.com/delete/${id}`,).then((response) => {
            console.log(response.data);
        })
            .catch((err) => { console.log(err) })
    }

    Axios.get('https://expense-app.herokuapp.com/expenses')
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => { console.log(err) })




    return (
        <div className='expenses-list'>
            {data.length === 0 ? <p>No expenses found</p> :
                data.map(expense =>
                    <ExpenseItem id={expense.id} key={expense.id} item={expense.item} price={expense.price} date={expense.date} onGetIdHandler={getId} />
                )}
        </div>
    )
}

export default ExpensesList