import Logo from '../../assets/Logo'
import { HeaderContainer } from './styles'

const Header = ({ children }) => {

    return (

        <HeaderContainer>

            <div className='header_div-logo'>

                <Logo/>
                
            </div>

            <div className='header_div-extra'>

                {children}
                
            </div>
            
        </HeaderContainer>
    )
}

export default Header