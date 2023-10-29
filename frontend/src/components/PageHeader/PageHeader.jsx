import './PageHeader.css'

export default function PageHeader(props){
    return(<header className='header'>
        <h2>{props.name}<small>{props.small}</small></h2>
    </header>
    )
}