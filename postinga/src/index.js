import axios from "axios"
import postsStore from "./store/postsStore";
import * as postActions from "./actions/postActions"

postsStore.subscribe(()=> {
    console.log("state changed !",postsStore.getState())
})




let post = {
    userId: 1,
    id: 5,
    title: "Created --- nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}


let updatePost = {
    userId: 2,
    id: 1,
    title: "--- updated ---- nesciunt quas odio ",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}

// console.log(typeof ourData[0])
postActions.resetPostStore()

postActions.getAllPosts()

postActions.getPostById(1)

postActions.createPost(post)

postActions.updatePost(updatePost)

postActions.deletePost(3)