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
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjE0MTMxNywiZXhwIjoxNjYyMTQ0OTE3LCJzdWIiOiJXYkRscHZtIn0.CDVsONiPlOmF7MhnAJmc1GHdkC058B7wZPzloeupGfg`

        Api.get(`users/WbDlpvm`)
        .then(res => {
            console.log(res)
            setUser(res)
        })
        .catch((err) => console.log(err))
        
    }, []) 

    return (

        <ModalContainer onClick={(e) => {
            e.target.className !== 'modal_create' && setIsProfileVisible(false)
        }}>

            <div>

            <h3> {user.nickname} </h3>

            <figure>
                <img src={user.image} alt='Foto de perfil' />
            </figure>

            <section>

                <div>

                    <figure> <IconSchool/> </figure>

                    <span>{user.type}</span>

                </div>

                <div>

                    <figure> <IconEmail/> </figure>

                    <span>{user.email}</span>

                </div>

            </section>

            <button> <IconConfig/> </button>

            </div>

        </ModalContainer>
    )
}

export default ModalProfile