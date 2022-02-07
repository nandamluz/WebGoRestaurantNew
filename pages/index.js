import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import PlatesCard from '../components/PlatesCard'
import { useState,useEffect } from 'react';
import api from "../pages/api/api"
import styles from './dashboard.module.css'

export default function Home() {
  const [plates, setPlates] = useState([]);

  const router = useRouter()


  useEffect(() => {
    loadPlates();
  }, []);

  async function loadPlates() {
    const listPlates = await api.get("/plates"); 
    
    setPlates(listPlates.data);
  } 

  async function editPlate(id) {

    router.push({
      pathname: '/edit',
      query: {
         plateid: id
     },
    })

  }

  async function deletePlate(id) {

    await api.delete(`/plates/${id}`);

    loadPlates();
    
  }

  console.log("plates",plates)
  return (
    <div className={styles.dashboard}>
     <Header/>
     <div className={styles.dashboardCards}>
     {plates.map((plate)=>{
       return(
         <PlatesCard 
         editPlate={() => editPlate(plate.id)}
         deletePlate={() => deletePlate(plate.id) }
         data={plate}/>
       )
     })}
     </div>
    </div>
  )
}
