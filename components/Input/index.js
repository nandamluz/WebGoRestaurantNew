import styles from "./input.module.css";
import classnames from "classnames";




const Input = ({label,name, onBlur, value, placeholder, onChange, className, error}) => {

const containerClasses = classnames(styles.container, className)
  return(
    <div className={containerClasses}>
        <spam className={styles.label}> {label} </spam>
        <input 
        name={name} 
        onBlur={onBlur} 
        value={value} 
        className={styles.input} 
        placeholder={placeholder} 
        onChange={onChange}/>
        {error && <span className={styles.error}>{error}</span>}
    </div>
    
  )
}


export default Input;