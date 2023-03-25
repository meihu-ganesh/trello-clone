import React, { useState } from "react";
import { addList } from "../store/listSlice";
import { useDispatch } from "react-redux";

const AddNewItems = () => {
    const [inputVal, setInputVal] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addList({ id: Math.random(), title: inputVal }));
    console.log("input val", inputVal);
    };
    const updateInput = (e) => {
    setInputVal(e.target.value);
    };
    const openForm = ()=> {
        setIsFormVisible(true);
    }
    const hideForm = ()=> {
        setIsFormVisible(false);
    }
    return (
    <div>
        <button onClick={openForm}>+ Add New Card</button>
        { isFormVisible && <form onSubmit={submitHandler} className='mt-3'>
            <div className=" mt-3">
                <input value={inputVal} onChange={updateInput} />
                <button onClick={hideForm} className="mr-3">Cancel</button>
                <button onClick={submitHandler} className='bg-blue-500 px-3 py-1'>Save</button>
            </div>
        </form>}
    </div>
    );
};

export default AddNewItems;
