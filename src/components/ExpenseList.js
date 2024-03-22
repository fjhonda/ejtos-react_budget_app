
import React from 'react'
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () =>{

    const state = useContext(AppContext);

    return (
        <div className='container'>
            <h3>Allocation</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.expenses.map( e => (
                            <ExpenseItem key={e.id} {...e} />
                        ))
                    }
                    
                </tbody>
                </table>
        </div>
    )
}

export default ExpenseList;
