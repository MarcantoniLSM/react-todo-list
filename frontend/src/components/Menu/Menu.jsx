import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu(){
    return(
    <nav className='menu'>
        <div className='container'>
            <div className=' titulo'>
                <a className='' href='#'>Todo App</a>
            </div>

            <div id='' className='caminhos'>
                <ul >
                    <li><a href='Todo'>Tarefas</a></li>
                    <li><a href='About'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}