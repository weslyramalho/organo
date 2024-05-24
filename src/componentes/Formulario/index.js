import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './Formulario.css'
export const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Design',
        'Mobile',
        'Marketing',
        'UX/UI',
        'DevOps',
        'Data Science',
    ]
    const aoSalvar =(evento)=>{
        evento.preventDefault();
    }

    return (
        <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
            <CampoTexto obrigatorio={true} label="Imegem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
            <Botao texto="Criar Card"/>
        </form>
        </section>
    )
}