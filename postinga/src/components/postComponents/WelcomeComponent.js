import React, { useState, useEffect,useContext } from 'react';
import postsStore from "../../store/postsStore";
import {Provider, useSelector,useDispatch} from "react-redux";
import * as postsActions from "../../actions/postActions"
import * as postActions from "./../../actions/postActions"

const Content = React.createContext()

export default function WelcomeComponent(){

    useEffect(() => {
        postsActions.resetPostStore()
    },[]);

    const postState =  () => {
        return postsStore.getState();
    }
    const dispatch = useDispatch()

    const allPostsState = useSelector(postState)
    console.log(allPostsState)

    return (
        <Content.Provider value={dispatch}  className="container content">
            <br /><br/>
            <h4>All new posts : </h4><br />
            <div className="row">
                <ListofPosts allPosts={allPostsState} />
            </div>
            <br/>
        </Content.Provider>
    )

}

function ListofPosts ({allPosts}){
    return allPosts.map(post =>
        <CurrentPost key={post.id} {...post} />
    )
}

function CurrentPost({...postContent}){
    const dispatch  = useContext(Content)
    return (
            <div className="col-sm-3">
                <h6>Title : {postContent.title}</h6>
                <p>Message  : {postContent.body}</p>
                <button onClick={() => {
                    postActions.deletePost(postContent.id)
                }}>Delete</button>
            </div>


    )
}