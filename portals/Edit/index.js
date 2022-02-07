import styles from "./edit.module.css"

import Header from '../../components/Header'
import PlatesCard from '../../components/PlatesCard'
import EditPlate from "../../components/EditPlate"

export default function Edit() {
  return (
    <div className={styles.container}>
     <Header/>
     <EditPlate/>
    </div>
  )
}