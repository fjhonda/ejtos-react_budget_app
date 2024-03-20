
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const Remaining = () => {

    const state = useContext(AppContext);

    //calculating remaining
    let totalExpenses=0;
    state.expenses.forEach(element => {
        totalExpenses+=element.cost;
    });

    const totalRemaining=state.budget-totalExpenses;
    const classes = 'container '+ (totalRemaining>0 ? 'text-bg-success p-3' : 'text-bg-danger p-3')

    return (
        <div className={classes}>
            {`Remaining ${state.currency} ${totalRemaining}`}
        </div>
    )
}

export default Remaining;