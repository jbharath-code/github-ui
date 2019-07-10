import React from 'react';
import { connect } from 'react-redux';
import fetchUserInformation from '../actions/fetchActions/fetchUserInformation';
import fetchReposInformation from '../actions/fetchActions/fetchReposInformation';

import GithubDashboard from '../components/githubDashbboard';
class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUserInformation();
        this.props.fetchUserReposInformation();
    }


    render() {
        return (
            <GithubDashboard 
                user={this.props.github.userData} 
                repos={this.props.github.reposData}
            />
        );
    }
}

HomeContainer.propTypes = {};

HomeContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        github: state.get('github')
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUserReposInformation: () => {
        dispatch(fetchReposInformation());
    },
    fetchUserInformation: () => {
        dispatch(fetchUserInformation());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
