import React, { useEffect, useState } from "react";
import axios from "axios";
import Media from "./Media"

export default function NasaGrid({ limit }){
    const [nasa, setNasa] = useState([])
    const [mediaUrl, setMediaUrl] = useState('')
    const [mediaType, setMediaType] = useState('')
    
    const apiKey = '8dzkNbe9C5YIr88ffb5sGaffbNx5bRZCBOcNdYYZ'

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-07-17`)
            .then(response => {
                const nasaInfo = response
                setMediaType(response.data.media_type)
                setMediaUrl(response.data.url)
                console.log('nasaInfo', nasaInfo)
            })
            
    }, [mediaUrl])

    return (
        <div>
            <h2>{}</h2>
            <Media mediaUrl={mediaUrl} mediaType={mediaType} />

        </div>
    )
}