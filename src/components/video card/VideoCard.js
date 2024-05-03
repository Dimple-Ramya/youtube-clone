import React from 'react'

const VideoCard = ({ video }) => {
    return (

        <div className='border border-slate-400 h-[340px] w-[350px] m-2 rounded-lg'
        >
            <img
                src={video.snippet.thumbnails.high.url}
                className='rounded-t-lg'
            />
            <h2>{video.snippet.title}</h2>
        </div>
    )
}

export default VideoCard