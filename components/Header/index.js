import styles from "./header.module.css"
import Link from "next/link";
import { useState } from "react";
import AddPlate from "../AddPlate"




export default function Header(add) {
  const [isModalVisible, setIsModalVisible] = useState(false)

    return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.logo}>
            <Link href="/"><img src="logo.png" /></Link>
            </div>
            <div className={styles.headerbutton}>
              <button className={styles.newPlate} onClick={() => setIsModalVisible(true)}><spam>Novo prato</spam></button>
              {isModalVisible && <AddPlate onClose={() => setIsModalVisible(!isModalVisible)}/>}

              <spam className={styles.addButton}> <Link href="/add"><img src="Plus.png" width="30px" height="30px"/></Link></spam>
            </div>
        </div>
      </div>
    )
  }
  