import Modal from '../shared/Modal'
//@ts-ignore
import classes from '../styles/Modal.module.scss'

interface IContentedModalProps {
    isShow: boolean
    setShow: Function
    children: any
}

const ContentedModal = ({children, isShow, setShow}: IContentedModalProps) => {
  return (
    <Modal isShow={isShow} setShow={setShow}>
        <div 
            className={classes.modal_content} 
            onClick={e=>e.stopPropagation()}
        > 
            {children}
        </div>
    </Modal>
  )
}

export default ContentedModal