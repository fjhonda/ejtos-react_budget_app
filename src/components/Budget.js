import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const Budget = () => {

    const state = useContext(AppContext);

    return (
        <div className='container text-bg-secondary p-3'>
            {`Budget ${state.currency}`}
            <input type="number" value={state.budget} onChange={()=> console.log('Test')} />
        </div>
    )
}

export default Budget;