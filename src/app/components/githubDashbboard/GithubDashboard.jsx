import React from 'react';
import UserDetails from './userDetails/UserDetails';
import ReposDetails from './reposDetails/ReposDetails';
import styles from './styles.sass';

class GithubDashboard extends React.Component {


    render() {
        return (
            <div className="dashboard">
				<div className="user-details">
					<UserDetails user={this.props.user} />
				</div>
				<div className="repos-details">
					<ReposDetails repos={this.props.repos} />
				</div>
            </div>
        );
    }
}

GithubDashboard.propTypes = {};

GithubDashboard.defaultProps = {};

export default GithubDashboard;
