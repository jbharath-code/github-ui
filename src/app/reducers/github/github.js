import actionConstants from '../../constants/actions';

const initialState = ({
	userData: {},
	reposData: []
});


const github = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConstants.FETCH_REPO_INFO:
            return Object.assign ({}, state, action.payload);
        default:
            return state;
    }
};

export default github;