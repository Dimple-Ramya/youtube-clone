import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const showSidebar = useSelector((state) => {
        return state.sidebar.isOpen
    })

    console.log(showSidebar)

    if (showSidebar) {
        return (
            <ul className='h-[100%] w-[10%] p-2 shadow-lg shadow-gray-300'>
                <li>Home</li>
                <li>Subscription</li>
                <li>History</li>
            </ul>

        )
    }
}

export default Sidebar