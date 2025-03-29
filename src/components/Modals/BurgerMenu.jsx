import stylse from './BurgerMenu.module.css'
import Modal from "react-modal";



export default function BurgerMenu({ isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={"modalBurgerMenu"}
            className={"modalContentBurgerMenu"}
            closeTimeoutMS={400}
            onRequestClose={()=> onClose()}
            ariaHideApp={false}
        >
            
        </Modal>
    )
}