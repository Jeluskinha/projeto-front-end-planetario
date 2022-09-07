import DropConfig from "./styles"

const ModalConfigEdit = ({name})=>{
    
    return(
    <DropConfig id='dropConfig'>
        <h2>{name}</h2>
        <h2>Alterar tipo Usuário</h2>
        <h2>Alterar foto de perfil</h2>
    </DropConfig>         
    )
}

export default ModalConfigEdit