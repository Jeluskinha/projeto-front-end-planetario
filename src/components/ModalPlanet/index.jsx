import { useContext } from 'react'
import { DashboardContext } from '../../context/dashboard'
import { ModalContainer } from './styles'
import { MdClose } from 'react-icons/md'


const ModalPlanet = () => {
    
    const {closeModal, modalPlanet} = useContext(DashboardContext)

    return (

        <ModalContainer>

        <div className='planet-modal-box'>
            <div className='planet-modal-close'>

                <button onClick={closeModal}><MdClose size={35}/></button>

            </div>


            <div className='planet-modal-data'>

                <figure>

                    <img src={modalPlanet.image} alt="" />

                </figure>

                <div className='planet-modal-text'>

                    <h2>Planeta {modalPlanet.name}</h2>

                    <p>{modalPlanet.resume}</p>

                </div>

            </div>
            
        </div>

        </ModalContainer>
    )
}

export default ModalPlanet;