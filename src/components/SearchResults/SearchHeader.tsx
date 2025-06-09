import React from 'react'
import { Input } from '../ui/input'
import { Menu, Search, X } from 'lucide-react'
import { PriceFilter } from './PriceCommboBoxFilter'
import {props} from "./data/InputPropsTypes" 

const SearchHeader = ({ searchQuery, setQuery }: props) => {
    const [showFilter, setshowFilter] = React.useState<boolean>(true)
    return (
        <>
            <div className='sm:flex items-center gap-8 bg-[#F5F5F5] p-5 sm:p-3 px-5  '>
                {showFilter ? 
                <Menu className='sm:hidden w-6' onClick={() => setshowFilter(prev => !prev)} />:
                <X className='sm:hidden' onClick={() => setshowFilter(prev => !prev)}/>
                }
                <h1 className='font-semibold text-2xl'>Property Results</h1>
                <ul className=' gap-8 items-center [&>*]:font-normal hidden sm:flex'>
                    <li>Buy</li>
                    <li>Rent</li>
                    <li>Sell</li>
                </ul>
                <div className='ml-auto flex gap-2 items-center'>
                    <div className=' gap-2 items-center max-w-[500px] hidden sm:flex px-3 pr-7 bg-white border border-[#F5F5F5]'>
                        <Search className='text-[#858585]' />
                        <Input placeholder='Search Properties...' className='shadow-none p-0 rounded-none border-none outline-none focus:border-none focus:outline-none focus:shadow-none' value={searchQuery} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <PriceFilter />
                </div>
            </div>
            {!showFilter && 
            <div className='bg-[#F5F5F5] p-3  sm:hidden pt-3 transition duration-150'>
                <ul className='grid grid-rows-3 gap-4 [&>*]:font-semibold px-9'>
                    <li>Buy</li>
                    <li>Rent</li>
                    <li>Sell</li>
                </ul>
                <form className='px-3 gap-2 items-center max-w-[500px] hover:border-2 hover:border-black flex sm:hidden mt-3 pr-7 bg-[#F5F5F5] border border-[#F5F5F5]'>
                    <Search className='text-[#858585] w-5' />
                    <Input placeholder='Search Properties...' className='shadow-none p-0 rounded-none border-none outline-none focus:border-none focus:outline-none focus:shadow-none' value={searchQuery}
                    onChange={(e) => setQuery(e.target.value)} />
                </form>
            </div>
            }
        </>
    )
}

export default SearchHeader
