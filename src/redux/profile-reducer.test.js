import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from 'react';

it('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    let state = {
        posts: [
            {id: 1, message: 'Hello!', likesCount: 13},
            {id: 2, message: 'Good day', likesCount: 8},
            {id: 3, message: 'Victory day', likesCount: 7},
            {id: 4, message: 'summer evening', likesCount: 11}
        ]
    };
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(5);
});


