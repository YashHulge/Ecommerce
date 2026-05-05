import { createContext } from "react";

export let NameContext=createContext();

function NameProvider(props){
    let name ="Yash"
    return(
        <NameContext.Provider value={name}>
               {props.children}
        </NameContext.Provider>
    )
}

export default NameProvider