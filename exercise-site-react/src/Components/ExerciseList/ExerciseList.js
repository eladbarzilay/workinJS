import "./ExerciseList.css";

import { Link } from "react-router-dom";

function ExerciseList({exer}){

    const {title , description,_id }=exer;
    
    return (
        <div className="ExerciseList">
            <Link to={`/exercise/${_id}`} className="Link">
            <div className="exercise">   
              {title}
             <br/>
             {description}
             </div>
             </Link>
        </div>
    );
}

export default ExerciseList;
