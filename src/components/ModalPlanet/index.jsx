import { useContext } from 'react'
import { DashboardContext } from '../../context/dashboard'
import { ModalContainer } from './styles'
import IconClose from '../../assets/IconClose'
import { AnimatePresence, motion } from 'framer-motion'


const ModalPlanet = () => {
    
    const {closeModal, modalPlanet} = useContext(DashboardContext)

    return (

        <AnimatePresence>
            <ModalContainer>  

            <motion.div 
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01] 
            }}
            className='planet-modal-box'>
                <button onClick={closeModal}><IconClose/></button>

                <figure>

                    <img src={modalPlanet.image} alt="" />

                </figure>

                <div className='planet-modal-text'>

                    <h2>Planeta {modalPlanet.name}</h2>

                    <p>{modalPlanet.resume}</p>

                </div>
    
            </motion.div>

            </ModalContainer>
        </AnimatePresence>
    )
}

export default ModalPlanet;