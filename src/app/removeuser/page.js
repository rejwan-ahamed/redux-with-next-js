'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const RemoveUser = () => {
    const userData = useSelector((data) => data.users)
    const dispatch = useDispatch()
    const removeName = (id) => {
        dispatch(removeUser(id))
    }
    return <>
        <h1>Remove user from here</h1>
        <Link href={'/'}>Back to home</Link>
        {
            userData.map((item) => (
                <>
                    <h2>{item.name}</h2>
                    <button onClick={() => removeName(item.id)}>remove</button>
                </>
            ))
        }
    </>
}

export default RemoveUser;