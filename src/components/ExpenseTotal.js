
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const ExpenseTotal = () => {

    const state = useContext(AppContext);

    //calculating remaining
    let totalExpenses=0;
    state.expenses.forEach(element => {
        totalExpenses+=element.cost;
    });

    return (
        <div className='container text-bg-primary p-3'>
            {`Spent so far ${state.currency} ${totalExpenses}`}
        </div>
    )
}

export default ExpenseTotal;