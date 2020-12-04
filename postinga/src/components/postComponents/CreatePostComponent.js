import React, {useContext, useState} from "react"
import {useDispatch} from "react-redux";

const Context = React.createContext

export default function CreatePostComponent(){

    const dispatch = useDispatch()
    const [postState,setPostState] = useState({
        userId: 2,
        title: "FIRST nesciunt quas odio ",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    })

    const changePostValue = (event) => {
        console.log(event.target.value)
        setPostState({
            ...postState,
            [event.target.name] : event.target.value
        })
    }

    const submitPost = (event) => {
        console.log(postState)
        event.preventDefault()
    }

    return (
            <div>
                <div className="card">
                    <h2 className="align-center  font-weight-bold">Create Post</h2><br/><br/>
                    <form>
                        <div className="form-group">
                           <input type="text" name="title"  onChange={changePostValue} value={postState.title}/><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Post Content</label>
                            <textarea name="body" onChange={changePostValue} value={postState.body} type="text" name="testimonialBody" placeholder="Enter testimony body" rows="8" ></textarea>
                        </div>
                    </form>

                    <input type="submit" value="Post Testimony" onClick={submitPost}/>
                </div>
            </div>
    )
}