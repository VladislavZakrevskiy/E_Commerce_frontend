import { FC } from "react"
//@ts-ignore
import classes from '../styles/Modal.module.scss'
import { Typography } from "@mui/material"
import Modal from "../shared/Modal"

interface IErrorProps {
    isShow: boolean
    setShow: Function
    error: string
} 

const Error: FC<IErrorProps> = ({isShow, setShow, error}) => {
  
    return (
      <Modal isShow={isShow} setShow={setShow}>
          <div 
            className={classes.error_content} 
            onClick={e=>e.stopPropagation()}
          > 
            <Typography component={'h6'}>ERROR!</Typography>
            <Typography component={'p'}>{error}</Typography>
          </div>
      </Modal>
    )
}

export default Error