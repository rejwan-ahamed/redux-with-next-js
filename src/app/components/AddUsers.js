'use client'
import { useState } from "react"
import { addUsers } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function AddUsers() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const buttonClicked = () => {
        dispatch(addUsers(name)) //passing the name data in addUser in redux slice
    }
    return <>
        <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter user name" />
        <button onClick={() => { buttonClicked() }}>Add user</button>
    </>
}