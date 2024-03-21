import React from 'react'

const ExpenseItem = ({id, cost, name}) => {
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
                <button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbBKvIlroK0KpfmqnoXWNg-ApZZn33urVIQ&usqp=CAU"
                        width={30}
                        alt="plus icon"
                        style={{margin: '5px'}} />
                </button>
            </td>
            <td>
                <button>
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