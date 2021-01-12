const ADD_POST = "ADD_POST";
const SET_POSTS = "SET_POSTS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    profiles: [
        {id: 1, username: "Тамерлан Токбаев"}
    ],
    posts: [],
};
/*
    Post structure
    {
            "id": 1,
            "author": {
                "avatar": "http://127.0.0.1:8000/media/images/avatars/defavatar.png",
                "user": {
                    "first_name": "Tamerlan",
                    "last_name": "Tokbayev"
                }
            },
            "content": "Первый пост созданный в SPA React + Django",
            "likes": 0,
            "views": 0,
            "created_at": "2020-11-11T16:45:29.531867Z"
    }
*/

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(action.post);
            return stateCopy
        case SET_POSTS:
            return {...state, posts: action.posts}
        case DELETE_POST:
            let stateCopyDelete = {...state};
            stateCopyDelete.posts = [...state.posts];
            let postToDelete = stateCopyDelete.posts.find(post => post.id === action.id);
            let postId = stateCopyDelete.posts.indexOf(postToDelete);
            stateCopyDelete.posts.splice(postId, 1);
            return stateCopyDelete;
        default:
            return state;
    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST, post: post})
export const setPostsActionCreator = (posts) => ({type: SET_POSTS, posts})
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id: id})

export default profileReducer;