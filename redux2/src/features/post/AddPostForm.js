 import {useState} from "react";
 import {useDispatch} from "react-redux";
 import {nanoid} from "@reduxjs/toolkit";  
 import { postAdded } from "./postSlice";

 const AddPostForm =()=>{
    const [title , settitle] =useState("");
    const [content, setcontent] =useState("");
    const onTitleChanged=e=>settitle(e.target.value);
    const dispatch=useDispatch()
    const onContentChanged=e=>setcontent(e.target.value);
const onSavePostClicked=()=>{
    if(title &&content){
        dispatch(
            postAdded({
                id:nanoid(),
                title,
                content 
            })
        )
        settitle("")
        setcontent("")
    }
}


    return ( 
        <section>
            <h2>Add a new post</h2>
            <form >
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}/>
                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}/>
                <button type='button' onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    )


 }
 export default AddPostForm;
