import styles from "./addPlate.module.css"
import Link from "next/link";
import { useState } from 'react';
import api from "../../pages/api/api"
import Input from "../Input";
import InputMask from "../InputMask";
import * as yup from 'yup';
import { Formik } from "formik";




const AddPlate = ({onClose }) => {

    const [availability, setAvailability] = useState(true);
    
  
    async function addingPlate({url, name, price, description}) {
      try {
        await api.post('/plates', {url, name, price, description, availability});
        onClose()
     } catch (error) {
        console.error(error)
      }
      
    } 

    const plateForm = yup.object().shape({
      url: yup
          .string()
          .required("Campo obrigatório"),
      name: yup
          .string()
          .required("Campo obrigatório"),
      price: yup
          .string()
          .required("Campo obrigatório"),
      description: yup
          .string()
          .required("Campo obrigatório")

    });
   
   

  return(
    <div className={styles.modal}>
    <div className={styles.platesContainer}> 
          
      <div className={styles.card}> 
      <div className={styles.top}>
        <h1>Novo Prato</h1>
        <button onClick={onClose}><img src="x.png"/></button>
      </div>
      
            <Formik 
            initialValues={{ url: '', name: '', price: '', description: '' }}
            validationSchema={plateForm} 
            onSubmit={addingPlate}
            >
               {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,

        }) => (
         <div onSubmit={handleSubmit}>
              <div className={styles.details} >
                
                  <Input 
                  label="URL da imagem" 
                  name="url" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                  error={errors.url && touched.url && errors.url}/>

                  <div className={styles.main}>
                  <Input 
                  label="Nome do prato" 
                  name="name" 
                  placeholder="Ex:Moda Italiana" 
                  className={styles.name} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name && errors.name}/>

                  <InputMask 
                  label="Preço" 
                  name="price"
                  placeholder="R$" 
                  className={styles.price} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  error={errors.price && touched.price && errors.price}/> 

                  </div>        

                  <Input 
                  label="Descrição do prato" 
                  placeholder="" 
                  name="description" 
                  className={styles.description} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  error={errors.description && touched.description && errors.description}/>

                  
              </div> 
              
                  <p className={styles.optionsAvailability}>Disponibilidade</p>
                  <div className={styles.optionsAvailability}>
                      <div className={styles.toggle}>
                        <input type="checkbox" checked={availability} name="available"id="foo"onChange={()=> setAvailability(!availability)} />
                        <label for="foo"></label>
                      </div>
                  </div>
              
                  <div className={styles.addButton}>
                    <button className={styles.addPlate}onClick={handleSubmit} type="submit" disabled={isSubmitting}><spam>Adicionar prato</spam></button>
                    <spam className={styles.add}><img src="Plus.png" width="30px" height="30px"/></spam>
                  </div>
          </div>
            )}
            </Formik>
          
      </div>

        
    </div>
    </div>
    
  )
}


export default AddPlate;

