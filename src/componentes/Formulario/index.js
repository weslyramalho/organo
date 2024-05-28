import { useState } from 'react'
import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './Formulario.css'
export const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] =useState('');
    const [time, setTime]= useState('');

    
    const aoSalvar =(evento)=>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto value={nome} aoAlterado={valor =>setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
            <CampoTexto value={cargo} aoAlterado={valor=>setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
            <CampoTexto value={imagem} aoAlterado={valor=>setImagem(valor)} obrigatorio={true} label="Imegem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa value={imagem} aoAlterado={valor=>setTime(valor)} label="Time" itens={props.times}/>
            <Botao texto="Criar Card"/>
        </form>
        </section>
    )
}