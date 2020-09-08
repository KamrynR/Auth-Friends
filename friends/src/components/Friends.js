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
            <h2>Friends List</h2>
            <div className='friends-list'>
                {friends.map(x => (
                    <div key={x.id} className='friend'>
                        <h4>{x.name}</h4>
                        <p>Age: {x.age}</p>
                        <p>Email: {x.email}</p>
                    </div>
                ))}
            </div>
        </>
  );
};

export default Friends;