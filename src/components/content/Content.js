import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { youtubeApi } from '../../utils/Constants'
import VideoCard from '../video card/VideoCard'
const Content = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData();

    }, [])

    // const getData = async () => {
    //     fetch(youtubeApi)
    //         .then(response => {
    //             // console.log(response)
    //             // console.log(response.json())
    //             return response.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setData(data.items)
    //         })
    //         .catch(error => console.error(error));

    // }

    const getData = async () => {
        try {
            const response = await fetch(youtubeApi)
            const data = await response.json()
            console.log(data)
            setData(data.items)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-row flex-wrap w-[90%] overflow-auto'>
            {data && data.map((each) =>
            (
                <Link to={"/watch?v=" + each.id} id={each.id}><VideoCard video={each} /></Link>
            )
            )}
        </div >
    )
}

export default Content