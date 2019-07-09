import { polyfill } from 'es6-promise';
import axios from 'axios';
polyfill();

export default function (url, body, type = 'GET') {
	const options = {
		method: type,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
		data: JSON.stringify(body)
	};
	return axios(url, options).then((resp) => {
		// there's always a body
		// const json = resp.json();
		const json = resp;
		
		if (+resp.status === 401) {
			window.location.reload(true);
		}

		if (resp.status >= 200 && resp.status < 300) {
			// return json;
			return json.data;
		}
		return json.then(Promise.reject.bind(Promise));
	});

}
