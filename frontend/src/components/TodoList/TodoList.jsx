import './TodoList.css'

export default function TodoList(props){
    function renderRows(){
        const list = props.list || []
        return (list.map(todo =>{
            <tr>
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