import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'
import EditForm from './EditForm'
import Axios from 'axios'

const ExpenseItem = (props) => {

    const [item, setItem] = useState(props.item);
    const [amount, setAmount] = useState(props.price);
    const [date, setDate] = useState(props.date);



    const [open, setOpen] = useState(false);

    const openForm = () => {
        setOpen(true);
    }

    const clickHandler = (clickHandle) => {
        const click = clickHandle;
        setOpen(click)
    }

    const deleteHandler = (id) => {
        console.log(id);
        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            })
    }

    const getNewValues = (data) => {
        setItem(data.item)
        setAmount(data.price);
        setDate(new Date(data.date))
    }



    return (
        <>
            <div className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description" >
                    <h2>{item}</h2>
                    <div className='edit-delete-btn'>
                        <button className='edit_btn' onClick={openForm}>Edit</button>
                        <button className='delete_btn' onClick={() => { deleteHandler(props.id) }}>Delete</button>
                    </div>
                    <div className="expense-item__price">{'$' + amount}</div>

                </div>
            </div>
            {open && <EditForm onEditClick={clickHandler} data={props} onNewValues={getNewValues} />}
        </>
    )
}

export default ExpenseItem