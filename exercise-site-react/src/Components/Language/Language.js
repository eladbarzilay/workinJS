import "./Language.css";

function Language(props){
    return (
        <div className="Language">
			{props.lan.language} 
            <img width="20px" height="20px" src={props.lan.icon} alt=""/>
        </div>
    );
}

export default Language;
