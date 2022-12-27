import './App.css';
import Expenses from './components/Expenses';
import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense'
import Axios from 'axios';

function App() {


  const [dbData, setDbData] = useState([]);

  Axios.get('http://us-cdbr-east-06.cleardb.net/expenses')
    .then((response) => {
      setDbData(response.data);
    })
    .catch((err) => { console.log(err) })

  dbData.forEach(element => {
    element.date = (new Date(element.date));;
  });


  // create state for render list
  const addExpenseHandler = (newExpense) => {
    setDbData((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpense sendNewExpenseToApp={addExpenseHandler} />
      <Expenses data={dbData} />
    </div>
  );
}


export default App;
