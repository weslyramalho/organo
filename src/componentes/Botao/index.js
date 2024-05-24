import './botao.css'

export const Botao = (props) => {
    return(
        <button className='botao'>{props.texto}</button>
    )
}