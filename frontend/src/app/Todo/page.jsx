'use client'
import axios from 'axios'
import PageHeader from '@/components/PageHeader/PageHeader'
import './Todo.css'
import TodoForm from '@/components/TodoForm/TodoForm'

import React, { useRef, useState } from 'react';
import TodoList from '@/components/TodoList/TodoList'

export default function Todo(props) {
    const URL = 'http://localhost:3003/api/todos'
    const todoRef = useRef(null);
    const [Description, setDescription] = useState('')
    const [List, setList] = useState()
    const [Refresh, setRefresh] = useState(false)

    axios.get(URL)
          .then((resp) => {
            console.log('enbte');
            setDescription('');
            setList(resp.data);
            console.log('Valor para a lista: ' + resp.data);
            console.log('Valor da lista: ' + List)
          });

    const handleInput = (e) =>{
        setDescription(e.target.value)
    }

    const refresh = () => {
        axios.get(URL)
          .then((resp) => {
            console.log('enbte');
            setDescription('');
            setList(resp.data);
            console.log(resp.data);
            console.log(List)
          });
      };
    
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
            <TodoForm handleInput={handleInput} handleAdd={handleAdd} />
            <TodoList list={List}></TodoList>
        </div>
    )
}