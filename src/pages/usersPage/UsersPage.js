import React, {useEffect, useRef, useState} from 'react';

function UsersPage(props) {

    const [users, setUsers]  = useState([])
    async function getUsers () {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const [info , setInfo]= useState([])
    const infoUsers= async (userId) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.target.value}`)
        const data= await response.json()
        setInfo(data)
    }

    useEffect(() =>{
        console.log()
    }, [])

    return (
        <>
            <ul>
                {users.map(user => <li>{user.name} <button value={user.id}  onClick={infoUsers}>more</button></li>)}
            </ul>

            <ul>
                <li>name: {info.name} </li>
                <li>username: {info.username} </li>
                <li>email: {info.email} </li>
            </ul>
        </>

    );
}

export default UsersPage;