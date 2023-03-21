import React from 'react'
import Filter from './Filter'
import List from './List'

const Body = () => {
    return (
        <div className=' w-full border'>
            <Filter />
            <div>
                <List />
            </div>
        </div>
    )
}

export default Body