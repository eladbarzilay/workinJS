
import { useRef } from "react";

export default function Focus(){
const inputRef = useRef();

function focusInput(){
    inputRef.current.focus();
}

    return <div>
        <input ref={inputRef}/>
        <button onClick={focusInput}>Click To Focus</button>
    </div>
}