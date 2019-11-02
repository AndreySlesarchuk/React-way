import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

        let stateWithSetState = useState(false);
        let editMode = stateWithSetState[0];

        return (
            <div>
                {<div>
                    <span>{props.status || "------------"}</span>
                </div>
                }
                {false &&
                <div>
                    <input autoFocus={true}/>
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;