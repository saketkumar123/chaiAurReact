import React from 'react'

function MyList() {

    const items = ['Apple', "Banana", 'Guvava', 'Redish'];

    const users = [
        { id: 1, name: 'Saket', age: 32 },
        { id: 2, name: 'Seema', age: 25 },
        { id: 3, name: 'Keerat', age: 4 },
        { id: 4, name: 'Indradev', age: 40 },
        { id: 5, name: 'Ojas', age: 3 },
    ]

    return (
        <div>
            <h3>My List Item</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>My User List</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} is {user.age} years old</li>
                ))}
            </ul>
        </div>
    )
}

export default MyList