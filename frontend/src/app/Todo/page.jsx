'use client'
import axios from 'axios'
import PageHeader from '@/components/PageHeader/PageHeader'
import './Todo.css'
import TodoForm from '@/components/TodoForm/TodoForm'
import React, { useRef, useState } from 'react';
import TodoList from '@/components/TodoList/TodoList'
/*import storeConfig from '@/store/storeConfig'

store = storeConfig()*/

export default function Todo(props) {
    const URL = 'http://localhost:3003/api/todos'
    const todoRef = useRef(null);
    const [Description, setDescription] = useState('')
    const [List, setList] = useState(initialList())

    const handleInput = (e) =>{
        setDescription(e.target.value)
    }
    
    function initialList(){
        return(axios.get(URL)
        .then(resp => resp.data))
    }


    const getList = () =>{
        // let lista
        // axios.get(URL)
        // .then(resp => resp.data)
        // .then((resp) =>{
        //     console.log('resp: '+resp)
        //     lista = resp
        //     console.log('lista: ' + lista)
        //     setList(lista)
        //     console.log('List: ' + List)
        // })
        console.log(List)
    }  

    const handleAdd = () => {
        console.log(this)
        axios.post(URL, { description: Description })
          .then((response) => {
            console.log("Descrição: " + Description);
          })
      }
    return (
        <div ref={todoRef}>
            <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            <TodoForm handleInput={handleInput} handleAdd={getList} />
            <TodoList list={List}></TodoList>
        </div>
    )
}