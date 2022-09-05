import { ModalContainer } from './styles'

import IconSchool from '../../assets/IconSchool'
import IconEmail from '../../assets/IconEmail'
import IconConfig from '../../assets/IconConfig'
import { useContext, useEffect, useState } from 'react'

import Api from '../../services/api'
import { BlogContext } from '../../context/blog'

const ModalProfile = () => {

    const [ user, setUser ] = useState({})
    const { setIsProfileVisible } = useContext(BlogContext)

    useEffect(() => {
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjQwMDc5NCwiZXhwIjoxNjYyNDA0Mzk0LCJzdWIiOiJ6eUJDNFVNIn0.F-d2M6dKDmfa6r4OhYUG8pkfdQ4q4Z-SvxcA7q1NpRY`

        Api.get(`users/zyBC4UM`)
        .then(res => {
            console.log(res)
            setUser(res)
        })
        .catch((err) => console.log(err))
        
    }, []) 

    return (

        <ModalContainer className='modal_container' onClick={(e) => {
            e.target.className.includes('modal_container') && setIsProfileVisible(false)
        }}>

            <div className='modal-profile'>

            <h3> Teste </h3>

            <figure className='profile_picture'>
                <img src={user.image} alt='Foto de perfil' />
            </figure>

            <section>

                <div className='profile_info'> 

                    <div>

                        <figure> <IconSchool/> </figure>

                        <span>entusiasta</span>

                    </div>

                    <div>

                        <figure> <IconEmail/> </figure>

                        <span>email.com</span>

                    </div>
                
                </div>

                 <button> <IconConfig/> </button>

            </section>

            </div>

        </ModalContainer>
    )
}

export default ModalProfile