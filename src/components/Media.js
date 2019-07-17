import React from "react"

export default function Media(props){
    const {mediaUrl, mediaType} = props

return (
    <div>
        
        {mediaType === 'image'? <img src={mediaUrl} alt=""/> : <iframe src={mediaUrl} title={''}></iframe>}
        

    </div>
    )
}