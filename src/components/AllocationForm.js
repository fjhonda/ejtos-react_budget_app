import React, {useState} from 'react'
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const AllocationForm = () => {
    const state=useContext(AppContext);
    const [currentFormValues, setCurrentFormValues] = useState({
        modValue: 0,
        department: state.expenses[0].name,
        allocationType: "ADD_EXPENSE",
    })

    return (
            <div className='container'>
                <h3>Change allocation</h3>
                <div className='row'>
                    <div className='col'>
                        <span style={{marginRight:"10px"}}>
                            Department
                        </span>
                        <select value={currentFormValues.department} onChange={(e)=> setCurrentFormValues({
                            ...currentFormValues,
                            department: e.target.value,
                        })}>
                            {state.expenses.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                        </select>
                    </div>
                    <div className='col'>
                        <span style={{marginRight:"10px"}}>
                            Allocation
                        </span>
                        <select value={currentFormValues.allocationType} onChange={(e)=> setCurrentFormValues({
                            ...currentFormValues,
                            allocationType: e.target.value,
                        })}>
                            <option value="ADD_EXPENSE">Add</option>
                            <option value="RED_EXPENSE">Reduce</option>
                        </select>
                    </div>
                    <div className='col'>
                        {state.currency}
                        <input type="number" value={currentFormValues.modValue} onChange={(e) => {
                            const newExpenseValue= parseInt(e.target.value)
                            setCurrentFormValues({
                                ...currentFormValues,
                                modValue: newExpenseValue
                            })
                            if (state.budget-newExpenseValue < 0)
                                setTimeout(()=> alert('The value cannot exceed the remaining funds'), 1000)
                        }
                        }/>   
                    </div>
                    <div className='col'>
                        <button 
                            className="btn btn-primary"
                            onClick={()=> state.dispatch({
                                type: currentFormValues.allocationType,
                                payload: {
                                    name: currentFormValues.department,
                                    cost: currentFormValues.modValue,
                                }
                            })}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default AllocationForm