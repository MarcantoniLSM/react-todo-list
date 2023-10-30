import './TodoList.css'

export default function TodoList(props){
    function renderRows(){
        const list = props.List || []
        console.log(list)
        return (list.map((todo) =>{
            <tr key={todo.id}>
                <td>{todo.description}</td>
            </tr>
        }))
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}