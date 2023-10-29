import './Botão.css'

export default function Botão(props){
    if(props.hide){
        return false
    }else{
        return(
            <button className={`btn btn-${props.style}`} onClick={props.onClick}>{props.content}</button>
        )
    }


}