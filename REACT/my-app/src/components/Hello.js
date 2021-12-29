import Clicker from "./Clicker"

function Hello(props) {
    return  <div>
        <h1>Hello {props.name} {props.lastName}</h1>
    <Clicker/>
    </div>
}

export default Hello