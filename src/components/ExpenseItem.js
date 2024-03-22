import React from 'react'
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const ExpenseItem = ({id, cost, name}) => {
    const state= useContext(AppContext)

    const e = {
        cost,
        id,
        name,
    }

    return (
        <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.cost}</td>
            <td>
                <button onClick={()=> state.dispatch({
                        type: "ADD_EXPENSE",
                        payload: {
                            cost: 10,
                            name: e.name,
                        }
                    })}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbBKvIlroK0KpfmqnoXWNg-ApZZn33urVIQ&usqp=CAU"
                        width={30}
                        alt="plus icon"
                        style={{margin: '5px'}} />
                </button>
            </td>
            <td>
                <button onClick={()=> state.dispatch({
                        type: "RED_EXPENSE",
                        payload: {
                            cost: 10,
                            name: e.name,
                        }
                    })}>
                    <img src="https://media.istockphoto.com/id/691856020/vector/flat-round-minus-sign-red-icon-button-negative-symbol-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=dmbFAHK77xfhh0pM9Uq-OmUERIPo6345MHkq_k3JRLY="
                    width={30}
                    alt="plus icon"
                    style={{margin: '5px'}} />
                </button>
            </td>
        </tr>
    )
}

export default ExpenseItem;