import "./Main.css";
import Welcome from '../Welcome/Welcome'
import LanguageList from "../LanguageList/LanguageList";


function Main() {
    return (
        <div className="Main">
            <Welcome/>
			<LanguageList/>
        </div>
    );
}

export default Main;
