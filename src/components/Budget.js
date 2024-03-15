import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const Budget = () => {

    const state = useContext(AppContext);

    return (
        <div className='container'>
            {`Budget ${state.currency}`}
            <input type="number" value={state.budget} />
        </div>
    )
}

export default Budget;