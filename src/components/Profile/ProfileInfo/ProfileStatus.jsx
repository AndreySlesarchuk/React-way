import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: true
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={()=>{alert('hey')}}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onDoubleClick={()=>{alert('hey')}} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;