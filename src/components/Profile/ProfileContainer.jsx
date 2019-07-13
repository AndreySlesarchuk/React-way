import * as React from "react";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

export default ProfileContainer;