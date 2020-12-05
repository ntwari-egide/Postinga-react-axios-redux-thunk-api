import React, {useEffect,useContext} from "react";
import * as commentActions from "../../actions/CommentActions";
import commentStore from "../../store/CommentStore";
import {useSelector} from "react-redux";



function CommentComponent({postId}){
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

function CommentContent({...comment}) {
    console.log(comment)
    return (
        <div>
            <div className="col-sm-8">
                <p className="text-primary">Title : {comment.Name}</p>
                <p>Message : {comment.Body}</p>
                <p className="text-success">commented by : {comment.Email}</p>
            </div>
        </div>
    )

}

export default CommentComponent