import React from "react"
import { Image } from 'semantic-ui-react'
import "./style.scss"

export default function Media(props){
    const {mediaUrl, mediaType} = props

return (
    <div className="media">
        {mediaType === 'image'? <Image src={mediaUrl} alt="" size='massive'/> : <iframe src={mediaUrl} title={''}></iframe>}
    </div>
    )
}