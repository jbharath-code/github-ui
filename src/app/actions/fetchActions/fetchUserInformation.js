import urls from '../../constants/urls';
import apiFetch from '../util/apiFetch';

const fetchUserInformation = () => (dispatch) => apiFetch(
    urls.USER_API
)
.then((response) => {
    dispatch({
        type: "USER_INFO_FETCHED",
        payload: response
    });
});

export default fetchUserInformation;