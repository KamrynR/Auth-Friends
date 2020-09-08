import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from '../utils/axiosAuth';
import { CreateFriend } from './CreateFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err));
    }, []);
    
    return (
        <>  
            <CreateFriend />
            <h2>Friends</h2>
            <ul>
                {friends.map(x => (
                    <li key={x.id}>
                        <h4>{x.name}</h4>
                        <p>Age: {x.age}</p>
                        <p>Email: {x.email}</p>
                    </li>
                ))}
            </ul>
        </>
  );
};

export default Friends;