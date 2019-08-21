import React, { useEffect, useState } from "react";
import axios from "axios";
import Media from "./Media"
import Title from "./Title"
import Explanation from "./Explanation"
import Date from "./Date"
import { Card } from 'semantic-ui-react'
import "./style.scss"


export default function NasaGrid({ limit }){
    const [nasa, setNasa] = useState([])
    const [mediaUrl, setMediaUrl] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [title, setTitle] = useState('')
    const [explanation, setExplanation] = useState('')
    const apiKey = '8dzkNbe9C5YIr88ffb5sGaffbNx5bRZCBOcNdYYZ'
    const [date, setDate] = useState('')

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
            .then(response => {
                const nasaInfo = response
                setMediaType(response.data.media_type)
                setMediaUrl(response.data.url)
                setTitle(response.data.title)
                setExplanation(response.data.explanation)
                console.log('nasaInfo', nasaInfo)
                console.log('setExplanation',setExplanation)
            })
            
    }, [mediaUrl, date])

    return (
        <div>
            <Date date={date} setDate={setDate} />
            <Card className='card'>
                <Title title={title}/>
                <Media mediaUrl={mediaUrl} mediaType={mediaType} />
                <Explanation explanation={explanation} />
            </Card>
        </div>
        
    )
}