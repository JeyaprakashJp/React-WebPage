import React from "react";
export default function Joke(props){
    return(
        <>
        {props.setup && <h3>setup:(props.setup)</h3>}
        {/* <h3>setup:{props.setup}</h3> */}
        <p>punchline:{props.punchline}</p>
        </>
    )
}