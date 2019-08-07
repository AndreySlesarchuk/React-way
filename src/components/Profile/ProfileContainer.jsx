import * as React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return <ProfileContainer {...props} />
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

//let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));