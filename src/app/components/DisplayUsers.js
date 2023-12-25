"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"

export default function DisplayUsers() {

    //here userSelector hook is use to get data from redux store
    const userData = useSelector((data) => data.users)
    const dispatch = useDispatch()

    const itemRemove = (id) => {
        dispatch(removeUser(id))
    }
    return <>
        <h3>User displayed</h3>
        {
            userData.map((item) => (
                <>
                    <h3>{item.name}</h3>
                    <button onClick={() => { itemRemove(item.id) }}>remove</button>
                </>
            ))
        }
    </>
}