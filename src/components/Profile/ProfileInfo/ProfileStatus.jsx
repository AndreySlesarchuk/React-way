import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode () {
        this.state.editMode = true;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onDoubleClick={ this.activateEditMode.bind(this) } value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;