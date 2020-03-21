import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 13},
        {id: 2, message: 'Good day', likesCount: 8},
        {id: 3, message: 'Victory day', likesCount: 7},
        {id: 4, message: 'summer evening', likesCount: 11}
    ]
};

it('length of post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com")
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(5)

});

it('message of new post should be "it-kamasutra.com"', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com")
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com")
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(3)
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(4)
});
