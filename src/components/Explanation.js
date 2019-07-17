import React from "react"
import "./style.scss"


export default function Explanation(props){
    const {explanation} = props
    return (
        <p className="p">{explanation}</p>
    )
}
