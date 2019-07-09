import actionConstants from '../../constants/actions';

const initialState = ({
	userData: {},
	reposData: {}
});


const github = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConstants.REPO_INFO_FETCHED:
            return Object.assign ({}, state, {reposData: action.payload});
        case actionConstants.USER_INFO_FETCHED:
            return Object.assign ({}, state, {userData: action.payload});
        default:
            return state;
    }
};

export default github;