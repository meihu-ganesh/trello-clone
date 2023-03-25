import React, { useState } from "react";
import { addList } from "../store/listSlice";
import { useDispatch } from "react-redux";

const AddNewItems = () => {
    const [inputVal, setInputVal] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addList({ id: Math.random(), title: inputVal }));
    console.log("input val", inputVal);
    };
    const updateInput = (e) => {
    setInputVal(e.target.value);
    };
    return (
    <div>
        <button>+ Add New Card</button>
        <form onSubmit={submitHandler}>
        <input value={inputVal} onChange={updateInput} />
        <button onClick={submitHandler}>Save</button>
        </form>
    </div>
    );
};

export default AddNewItems;
