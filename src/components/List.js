import React from 'react'
import AddNewItems from './AddNewItems'
import Card from './Card'
import { useSelector } from 'react-redux'

const List = () => {
    const listItem = useSelector(store => store.listSlice.list);
    return (
        <>
            { listItem.map((list)=><div key = { list.id } className='p-3 bg-gray-200 w-1/3'>{ list.title }</div>) }
            <div className='p-3 bg-gray-200 w-1/3'>
                {/* <div>To Do</div> */}
                {/* <Card /> */}
                <AddNewItems />
            </div>
        </>
    )
}

export default List
