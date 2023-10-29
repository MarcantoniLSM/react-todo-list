'use client'

import Botão from '../Botão/Botão'
import './TodoForm.css'
import "bootstrap/dist/css/bootstrap.min.css"

export default function TodoForm(props){
    return(
    <div>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input onChange={props.handleInput} value={props.description} id='description' className='form-control' placeholder='Adicionar Tarefa'>
            </input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <Botão onClick={props.handleAdd} hide={false} style='primary' content='+'/>
        </div>
    </div>
    )
}