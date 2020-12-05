import React, { useState, useEffect,useContext } from 'react';
import postsStore from "../../store/postsStore";
import {Provider, useSelector,useDispatch} from "react-redux";
import * as postsActions from "../../actions/postActions"
import * as postActions from "./../../actions/postActions"
import * as commentActions from "../../actions/CommentActions"
import {Link} from "react-router-dom";
import commentStore from "../../store/CommentStore";

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
        <Content.Provider value={dispatch}>
            <div   className="container content">
                <br/>
                <Link type="button" class="btn btn-primary" to="/create-post">Add post</Link>
                <br /><br/>
                <h4 className="text-center">All new posts : </h4><br />
                <div className="row">
                    <ListofPosts allPosts={allPostsState} />
                </div>
                <br/>
            </div>
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

                <Get_Comment_by_Id postId={postContent.id} />

                <Link type="button" class="btn btn-primary" to="/edit" to={{pathname: "/edit-post",state: postContent}}>Edit</Link>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button  type="button" class="btn btn-danger" onClick={() => {
                    postActions.deletePost(postContent.id)
                }}>Delete</button>

            </div>


    )
}

function Get_Comment_by_Id({postId}){
    // commentStore.subscribe(()=>{
    //     console.log("Comment changed : ",commentStore.getState())
    // })
    useEffect(()=>{
        commentActions.get_comment_by_oid(postId)
    },[])
    

    const commentState =() => {
        return commentStore.getState()
    }

    const allComments = useSelector(commentState)

    return (
        <div>
            <h6 className="text-center">Comments : </h6><br />
            <div className="row">
                <ListOfComments allComments={allComments} />
            </div>
        </div>
    )
}

function ListOfComments({allComments}){
    return allComments.map(comment =>
        <CommentContent key={comment.id} {...comment} />
    )
}

function CommentContent({...comment}){
    console.log(comment)
    return (
        <div>
            <div className="col-sm-8">
                <p className="text-primary">Title : {comment.Name}</p>
                <p>Message  : {comment.Body}</p>
                <p className="text-success">commented by : {comment.Email}</p>
            </div>
        </div>
    )
}