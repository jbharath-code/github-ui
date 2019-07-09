import urls from '../../constants/urls';
import apiFetch from '../util/apiFetch';

const fetchReposInformation = () => (dispatch) => apiFetch(
    urls.REPO_API
)
.then((response) => {
    dispatch({
        type: "REPO_INFO_FETCHED",
        payload: response
    });
});

export default fetchReposInformation;