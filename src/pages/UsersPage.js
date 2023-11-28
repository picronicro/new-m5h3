import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {API} from "../misc/Api";

function UsersPage(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUserList() {
            await API.get("users")
                .then(resp => setUsers(resp.data.users))
        }

        getUserList()
    }, []);

    return (
        <div>
            {users && users.map(user => <div key={user.id}>
                <Link to={`${user.id}`}>{user.firstName} {user.lastName}</Link>
            </div>)}
        </div>
    );
}

export default UsersPage;