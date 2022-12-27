import React, { useState } from 'react'
import './EditForm.css'
import Axios from 'axios'

const EditForm = (props) => {


    const [click] = useState(false);


    // create states for input form
    const [newItem, setItem] = useState(props.data.item)
    const [newAmount, setAmount] = useState(props.data.price)
    const [newDate, setDate] = useState(props.data.date)




    // Get year, month, and day part from the date
    var date = new Date(newDate);
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    var formattedDate = year + "-" + month + "-" + day;


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
    const updateHandler = (e) => {

        e.preventDefault();

        const newValues = {
            item: newItem,
            price: newAmount,
            date: newDate
        }

        props.onNewValues(newValues);



        Axios.put('https://expense-app.herokuapp.com/update', {
            item: newItem,
            price: newAmount,
            date: new Date(newDate),
            id: props.data.id
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => { console.log(err) })


    }
    const clickHandler = (e) => {
        e.preventDefault();
        props.onEditClick(click);
    }


    return (
        <form>
            <div className='edit-expense__controls'>
                <div className='edit-expense__control'>
                    <label>Title : </label>
                    <input type="text" value={newItem} onChange={itemHandler} />
                </div>
                <div className='edit-expense__control'>
                    <label>Amount : </label>
                    <input type="number" min='0.00' step='0.001' value={newAmount} onChange={amountHandler} />
                </div>
                <div className='edit-expense__control'>
                    <label>Date : </label>
                    <input type="date" value={formattedDate} onChange={dateHandler} />
                </div>
            </div>
            <div className='edit-expense__actions'>
                <button onClick={updateHandler} type='submit'>Update</button>
                <button onClick={clickHandler} type='submit'>Close</button>
            </div>
        </form>
    )
}

export default EditForm