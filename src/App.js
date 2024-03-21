import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='col'>
                            <Budget />
                        </div>
                        <div className='col'>
                            <Remaining />
                        </div>
                        <div className='col'>
                            <ExpenseTotal />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <ExpenseList />
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
