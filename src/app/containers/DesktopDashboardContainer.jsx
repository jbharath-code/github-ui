import React from 'react';
import { connect } from 'react-redux';

class DesktopDashboardContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUserInformation();
        this.props.fetchUserReposInformation();
    }


    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

DesktopDashboardContainer.propTypes = {};

DesktopDashboardContainer.defaultProps = {};

const mapStateToProps = state => {
    return {}
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
)(DesktopDashboardContainer);
