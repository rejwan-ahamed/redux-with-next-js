import Image from 'next/image'
import styles from './page.module.css'
import DisplayUsers from './components/DisplayUsers'
import AddUsers from './components/Addusers'

export default function Home() {
  return (
    <>
    <AddUsers></AddUsers>
    <DisplayUsers></DisplayUsers>
    </>
  )
}
