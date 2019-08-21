import React from "react"
import { Message } from 'semantic-ui-react'


export default function Explanation(props){
    const {explanation} = props
    return (
        <div>
        <Message color='blue'>{explanation}</Message>
        </div>
    )
}

 

