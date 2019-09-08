import * as React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1350;
        }
        this.props.getUserProfile(userId);
        setTimeout(() => {
            this.props.getStatus(userId);
        }, 1000);

    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);
