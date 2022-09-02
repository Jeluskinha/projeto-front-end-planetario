import { ModalContainer } from './styles'

import IconSchool from '../../assets/IconSchool'
import IconEmail from '../../assets/IconEmail'
import IconConfig from '../../assets/IconConfig'
import { useEffect, useState } from 'react'

const ModalProfile = () => {

    const [ user, setUser ] = useState

   /*  useEffect(() => {
        //requisição 
        //setUser
    }, []) */

    return (

        <ModalContainer>

            <div>

            <h3> usuario.nickname </h3>

            <figure>
                <img src='user.image' alt='Foto de perfil' />
            </figure>

            <section>

                <div>

                    <figure> <IconSchool/> </figure>

                    <span>user.type</span>

                </div>

                <div>

                    <figure> <IconEmail/> </figure>

                    <span>user.email</span>

                </div>

            </section>

            <button> <IconConfig/> </button>

            </div>

        </ModalContainer>
    )
}

export default ModalProfile