import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState ('');
    const [content, setContent] = useState ('');
    const [userId, setUserId] = useState ('');
    const users = useSelector (selectAllUsers);

    const dispatch = useDispatch();
    const onTitleChange = e => setTitle (e.target.value);
    const onContentChange = e => setContent (e.target.value);
    const onAuthorChange = (e) => { setUserId (e.target.value )}

    const onSavePostClicked = () => {
        if (title && content) {
            // dispatch (postAdded({
            //     id: nanoid(),
            //     title,
            //     content,
            // }));

            //alternate way
            dispatch (postAdded(title, content, userId))
        }

        setTitle('');
        setContent ('');
    }

    const canSave = Boolean(title) && Boolean (content) && Boolean (userId);

    const usersOptions = users.map (user =>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a New Posts</h2>
            <form>
                <label htmlFor="postTitle">Post Title :</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange} 
                />
                <label htmlFor="Author">Author : </label>
                <select 
                    value={userId} 
                    id="postAuthor"
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content :</label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
            </form>
            <button
                type="button"
                onClick={onSavePostClicked}
                disabled={!canSave}
            >Save Post</button>
        </section>
    );
};

export default AddPostForm;