import './App.css';
import Expenses from './components/Expenses';
import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense'
import Axios from 'axios';

function App() {


  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    Axios.get('https://expense-app.herokuapp.com//expenses').then((response) => {
      setDbData(response.data);
    })
  }, []);

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
