import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Watchpage = () => {
    const [id] = useSearchParams()
    // console.log(id)
    const searchId = id.get("v")
    console.log(searchId)

    return (
        <div>
            <div className='mr-[520px] ml-0'>
                <iframe        
                    width="860"
                    height="515"
                    src={"https://www.youtube.com/embed/" + searchId}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Watchpage