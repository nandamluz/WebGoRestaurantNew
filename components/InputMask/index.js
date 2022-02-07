import styles from "./input.module.css";
import classnames from "classnames";
import Mask from "react-input-mask";



const InputMask = ({label,name, onBlur, value, placeholder, onChange, className, error}) => {



  const currency = (e) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    e.currentTarget.value = value;
    return e;
  }

const containerClasses = classnames(styles.container, className)
  return(
    <div className={containerClasses}>
        <spam className={styles.label}> {label} </spam>
        <input name={name} 
        onBlur={onBlur} 
        value={value} 
        className={styles.input} 
        placeholder={placeholder} 
        onKeyUp={currency}
        onChange={onChange}/>
        
        {error && <span className={styles.error}>{error}</span>}

    </div>
    
  )
}


export default InputMask;