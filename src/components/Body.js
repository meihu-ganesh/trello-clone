import React from 'react'
// import Filter from './Filter'
import List from './List'

const Body = () => {
    return (
        <div className=' w-full border p-3'>
            {/* <Filter /> */}
            <div className='flex'>
                <List />
            </div>
        </div>
    )
}

export default Body