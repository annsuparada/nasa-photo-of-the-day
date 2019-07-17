import React from "react"
import "./style.scss"

export default function Media(props){
    const {mediaUrl, mediaType} = props

return (
    <div className="media">
        {mediaType === 'image'? <img src={mediaUrl} alt=""/> : <iframe src={mediaUrl} title={''}></iframe>}
    </div>
    )
}