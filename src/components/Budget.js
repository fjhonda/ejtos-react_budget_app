import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const Budget = () => {

    const state = useContext(AppContext);

    return (
        <div className='container text-bg-secondary p-3'>
            {`Budget ${state.currency}`}
            <input 
                type="number" 
                value={state.budget} 
                step={10}
                onChange={(e)=> {
                    const newBudget=parseInt(e.target.value)
                    if (newBudget<20001)
                        state.dispatch({type: 'SET_BUDGET', payload: parseInt(e.target.value)})
                    else
                        alert('You cannot exceed the budget limit of 20,000')
                }} 
            />
        </div>
    )
}

export default Budget;