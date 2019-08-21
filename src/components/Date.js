import React from "react"
import { Segment, Input } from 'semantic-ui-react'

export default function Date(props){
 const {date, setDate} = props
 const changeHandler = event => setDate(event.target.value)
 return (
    <Segment inverted>
        <h1>Nasa Photo of the Day</h1>
        <h3>Select date</h3>
     <Input  inverted size='big' type="date" value={date} onChange={changeHandler}/>
     </Segment>
 )

}
