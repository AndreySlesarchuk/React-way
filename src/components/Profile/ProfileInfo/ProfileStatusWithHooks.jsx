import React from 'react';

const ProfileStatusWithHooks = (props) => {
        return (
            <div>
                {true &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "----------"}</span>
                </div>
                }
                {false &&
                <div>
                    <input onChange={this.onStatusChange}
                        autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;