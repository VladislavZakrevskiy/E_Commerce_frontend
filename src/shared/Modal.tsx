import { FC } from "react"
//@ts-ignore
import classes from '../styles/Modal.module.scss'

interface IErrorProps {
    isShow: boolean
    setShow: Function
    children: any
} 

const Modal: FC<IErrorProps> = ({isShow, setShow, children}) => {
    const rootClasses = [classes.modal]
    if(isShow){
      rootClasses.push(classes.modal_active)
    }
  
    return (
      <div 
        onClick={()=> setShow(false)} 
        className={rootClasses.join(' ')}
      >
        {children}
      </div>
    )
}

export default Modal