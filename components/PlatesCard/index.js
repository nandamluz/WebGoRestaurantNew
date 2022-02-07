import styles from "./platesCard.module.css";
import { useState } from 'react';
import Link from "next/link";
import api from "../../pages/api/api"



export default function PlatesCard({data,deletePlate,editPlate}){

  const cardClassName = data.availability ? styles.platesContainer : styles.platesContainerOff

  return(
    <div className={cardClassName}>
      <div key={data.id}className={styles.cards}>
       
       <div className={styles.card}> 
          <div className={styles.details}>
            <img src={data.url}/>
              <div className={styles.text}>
                <h1>{data.name}</h1> 
                <p>{data.description}</p>
                <spam>{data.price}</spam>
              </div>
          </div>
          <div  className={styles.options}> 

            <div className={styles.optionsButtons}>
              <button onClick={editPlate}><Link href="/edit"><img src="editar.png"/></Link></button>
              <button className={styles.optionsButtons} onClick={deletePlate}><img src="lixo.png"/></button>
            </div>
            
            <div className={styles.optionsAvailability}>
                <div className={styles.toggle}>
                  <input type="checkbox" id="foo" checked={data.availability}/>
                  <label ></label>
                </div>
            </div>
          </div>
       </div>

      </div> 
    </div>
  )
}




