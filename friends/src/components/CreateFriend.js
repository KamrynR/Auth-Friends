import React, { useState } from 'react';
import { AxiosWithAuth } from '../utils/axiosAuth';

export const CreateFriend = () => {
    const [createFriends, setCreateFriends] = useState({
        id: new Date(),
        name: '',
        age: '',
        email: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth()
        .post('/friends', createFriends)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const handleChange = e => {
        setCreateFriends({ ...createFriends, [e.target.name]: e.target.value});
    };

    return (
        <div className='create-friend'>
            <h3>Add Friend</h3>
            <form onSubmit={handleSubmit}>
                <label for='name'>Name</label>
                <input
                name='name'
                type='text'
                value={createFriends.name}
                onChange={handleChange}
                />
                <br/>
                <label for='age'>Age</label>
                <input
                name='age'
                type='text'
                value={createFriends.age}
                onChange={handleChange}
                />
                <br/>
                <label for='email'>Email</label>
                <input
                name='email'
                type='text'
                value={createFriends.email}
                onChange={handleChange}
                />
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};