import styles from "./add.module.css"

import Header from '../../components/Header'
import PlatesCard from '../../components/PlatesCard'
import AddPlate from "../../components/AddPlate"

export default function Add() {
  return (
    <div className={styles.container}>
     <Header/>
     <AddPlate/>
    </div>
  )
}