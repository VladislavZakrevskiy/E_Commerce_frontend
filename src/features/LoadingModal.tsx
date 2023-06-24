import {CircularProgress} from '@mui/material'
import Modal from '../shared/Modal'

interface ILoadingModalProps {
    isLoading: boolean
}

const LoadingModal = ({isLoading}: ILoadingModalProps) => {
  
    if (isLoading) {
        return (
            <Modal isShow={isLoading} setShow={() => {}}> 
                <CircularProgress size={100} color='inherit'/>
            </Modal>
        )
    }

    return null

}

export default LoadingModal