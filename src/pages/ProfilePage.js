import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {API} from "../misc/Api";
import {tab} from "@testing-library/user-event/dist/tab";

function ProfilePage(props) {
    const {id} = useParams()
    const [profle, setProfle] = useState({})
    const [tabParams, setTabParams] = useSearchParams({tab: "posts"})

    const [misc, setMisc] = useState([])

    useEffect(() => {
        async function getProfile() {
            API.get(`users/${id}`)
                .then(resp => setProfle(resp.data))
        }

        getProfile()

        getMisc(tabParams.get("tab") === "posts")
    }, []);

    // posts $ todos
    async function getMisc(isPosts) {
        if (isPosts) {
            tabParams.set("tab", "posts")
        } else {
            tabParams.set("tab", "todos")
        }
        setTabParams(tabParams)

        await API.get(`users/${id}/${tabParams.get("tab")}`)
            .then(resp => {
                console.log(resp.data)
                isPosts ? setMisc(resp.data.posts) : setMisc(resp.data.todos)
            })
    }

    return (
        <div>
            <h2>name: {profle.firstName}</h2>
            <h2>surname: {profle.lastName}</h2>

            <div className="buttons">
                <button onClick={e => getMisc(true)}>posts</button>
                <button onClick={e => getMisc(false)}>todos</button>
            </div>
            <div className="misc">
                {
                    tabParams.get("tab") === "posts" ?
                        misc && misc.map(post => <p key={post.id}>{post.title}</p>)
                        :
                        misc && misc.map(todo => <p key={todo.id}>{todo.todo}</p>)
                }
            </div>
        </div>
    );
}

export default ProfilePage;