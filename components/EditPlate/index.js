import styles from "./addPlate.module.css"
import Link from "next/link";
import { useState, useEffect } from 'react';
import api from "../../pages/api/api"
import Input from "../Input";
import InputMask from "../InputMask";





const EditPlate = (props) => {
  console.log('props', props)
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [availability, setAvailability] = useState(true);
    const [plate, setPlate] = useState([]);

   
    useEffect(() => {
      loadPlates();
    }, []);
  
    async function loadPlates(id) {
      const listPlates = await api.get(`/plates/${id}`); 
      
      setPlate(listPlates.data);
    } 
 
    async function addingPlate() {
      await api.post('/plates', {url, name, price, description, availability});
    } 

   

  return(
    <div className={styles.backgroundModal}>
    <div className={styles.platesContainer}> 
          
      <div className={styles.card}> 
      <h1>Editar o prato</h1>

            <div className={styles.details} >

                <Input label="URL da imagem" onChange={(item)=> setUrl(item.target.value)}></Input>   
                <div className={styles.main}>
                <Input label="Nome do prato" placeholder="Ex:Moda Italiana" className={styles.name} onChange={(item)=> setName(item.target.value)}/>
                <InputMask label="Preço" placeholder="R$" className={styles.price} onChange={(item)=> setPrice(item.target.value)}/> 
                </div>        

                <Input label="Descrição do prato" placeholder="" className={styles.description} onChange={(item)=> setDescription(item.target.value)}/>

                
             </div> 
                <p className={styles.optionsAvailability}>Disponibilidade</p>
                <div className={styles.optionsAvailability}>
                    <div className={styles.toggle}>
                      <input type="checkbox" checked={availability} name="available"id="foo"onChange={()=> setAvailability(!availability)} />
                      <label for="foo"></label>
                    </div>
                </div>
             
                <div className={styles.addButton}>
                  <button className={styles.addPlate}onClick={addingPlate}><Link href="/"><spam>Adicionar prato</spam></Link></button>
                  <spam className={styles.add}><img src="Plus.png" width="30px" height="30px"/></spam>
                </div>
             
          
      </div>

        
    </div>
    </div>
    
  )
}


export default EditPlate;

