import React, { useEffect, useState } from 'react'
import "../../index.css"
import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/slices/SidebarSlice';
import { search_api } from '../../utils/Constants';

const Header = () => {
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const dispatch = useDispatch()

    const handleSidebar = () => {
        dispatch(toggleSidebar())
    }

    // useEffect(async () => {
    //     await fetch(search_api + "fitness")
    //         .then((response) => {
    //             console.log(response)
    //             console.log(response.json())
    //             return response.json();
    //         })
    //         .then((data) => console.log(data))
    //         .catch(err => console.log(err))
    // }, [])

    const getSuggestions = async () => {
        console.log(search)
        const response = await fetch(search_api + search)
        const data = await response.json()
        console.log(response)
        console.log(data)
        setSuggestions(data[1])
    }

    useEffect(() => {
        // getSuggestions()
        const timer = setTimeout(() => {
            getSuggestions()
        }, 500)

        return () => { clearTimeout(timer) }
    }, [search])


    return (
        <div className="w-full h-[6%] mt-1 shadow-md shadow-slate-200 flex justify-between">
            <div className='flex align-baseline'>
                <button className='border-none' onClick={handleSidebar}><FaBars /></button>
                <h2 className='mt-1 ml-3 mb-0 font-bold text-2xl'>YouTube</h2>
            </div>
            <div>
                <div >
                    <input
                        type='text'
                        placeholder='Search...'
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        className='border border-slate-400 rounded-l-full w-96 p-1'
                    />

                    <button
                        className='border border-slate-400 rounded-r-full w-8 h-8'
                    >
                        <IoMdSearch />
                    </button>
                </div>
                {
                    showSuggestions &&
                    <ul className='border border-slate-400 shadow shadow-md shadow-slate-600 fixed bg-white w-96 mt-1'>
                        {suggestions.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>

                }
            </div>
            <button className='border border-slate-500 rounded-full w-20 h-8'>Sign In</button>
        </div>
    )
}

export default Header