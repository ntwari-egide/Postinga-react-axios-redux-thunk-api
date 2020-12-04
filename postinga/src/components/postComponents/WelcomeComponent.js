import React, { useState, useEffect,useContext } from 'react';
import postsStore from "../../store/postsStore";
import {Provider, useSelector,useDispatch} from "react-redux";
import * as postsActions from "../../actions/postActions"


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
            <h4>All new posts : </h4>
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
    return (
        <div>
            <div className="col-md-3">
                <h5>Title : {postContent.title}</h5>
                <p>Message  : {postContent.body}</p>
            </div>

            <br/>
        </div>
    )
}