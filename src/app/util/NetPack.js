/**
* @author: girish
* @since: Mon Oct 24 2016 15:15:46 GMT+0530 (IST)
* @file: ajax.js
*
* @copyright: KNOLSKAPE Solutions Pvt Ltd
**/

/**
*
* ajax is helper to perform fetch request
* Purpose of having it as helper is
* 1. Fetch isn't supported in all browers so we need to use polyfill
* 2. Single place to handle generic errors like network issues
*
**/

import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
import PromiseDefer from 'promise-defer';

polyfill();

class NetPack {

	constructor(handlers, defaultOptions = {
		Accept: 'application/json',
		credentials: 'same-origin',
		'Access-Control-Allow-Credentials': true,
		'Content-Type': 'application/json'
	}) {
		this.networkErrorHandler = handlers.networkErrorHandler;
		this.backendErrorHandler = handlers.backendErrorHandler;
		this.parseErrorHandler = handlers.parseErrorHandler;
		this.internetConnectivityHandler = handlers.internetConnectivityHandler;
		this.defaultOptions = defaultOptions;
	}

	/**
	* [sleep description]
	* @param  {Number} time  time out time
	* @return {Object}      Promise for sleep
	*/
	sleep = (time = 1000) =>	new Promise((resolve) => setTimeout(resolve, time))

	/**
	* definition of parseHandler function
	* @param  {Object} response       response object
	* @param  {Object} parseError     parseError object
	* @param  {Object} Promise  		Promise of the fetch to be resolved or rejected
	*/
	parseHandler = (response, parseError, promiseForFetch) => {
		const infoObject = {
			ajaxCallInfo: response,
			errorInfo: parseError
		};
		// Parsing errors are caught and handled here
		this.parseErrorHandler(infoObject);
		promiseForFetch.reject(infoObject);
	}

	/**
	* definition of responseHandler function
	* @param  {Object} response       response object
	* @param  {Object} Promise  		Promise of the fetch to be resolved or rejected
	*/
	responseHandler = (response, promiseForFetch) => {
		if (response.ok) {
			//Successful responses are handled here
			response.json().then((responseJSON) => {
				//Successful responses is resolved from here
				promiseForFetch.resolve(responseJSON);
			}).catch((parseError) => {
				//Successful responses in non-json format are handled here
				this.parseHandler(response, parseError, promiseForFetch);
			});
		} else {
			// Backend errors are caught and handled here
			response.json().then((responseJSON) => {
				//Backend errors in json format are handled here
				const infoObject = {
					ajaxCallInfo: {
						ok: response.ok,
						redirected: response.redirected,
						status: response.status,
						statusText: response.statusText,
						type: response.type,
						url: response.url
					},
					response: responseJSON
				};
				this.backendErrorHandler(infoObject);
				promiseForFetch.reject(infoObject);
			})
			.catch((parseError) => {
				//Backend errors in non-json format are handled here
				this.parseHandler(response, parseError, promiseForFetch);
			});
		}
	}

	/**
	* definition of core function
	*
	* @param  {String} url          URL to acess the API
	* @param  {Object} initOptions  Request body and options to be sent
	* @param  {Object} Promise  		Promise of the fetch to be resolved or rejected
	* @return {Object} options     extra options
	*/
	core = (url, initOptions, promiseForFetch, options) => {
		fetch(url, initOptions).then((response) => {
			//Responses are analyzed and handled here
			this.internetConnectivityHandler(true);
			this.responseHandler(response, promiseForFetch);
		})
		.catch((networkError) => {
			// Network errors are caught and handled here
			this.internetConnectivityHandler(false);

			const infoObject = {
				errorInfo: networkError
			};
			this.networkErrorHandler(infoObject);

			if (options.shouldRetry !== undefined && !options.shouldRetry) {
				promiseForFetch.reject(networkError);
			}
			else {
				// Re fetch the failed api once again in an exponential time frame
				const sleepTime = options.sleepTime || 1000;
				this.sleep(sleepTime).then(() => {
					const updatedOptions = { ...options, sleepTime: sleepTime * 2 };
					this.core(url, initOptions, promiseForFetch, updatedOptions);
				});
			}
		});
	}

	/**
	* definition of coreUtil function
	*
	* @param  {String} url          URL to acess the API
	* @param  {Object} [options={}] Options that are used by the API
	* @return {Object}              response from the API
	*/
	coreUtil = (type, url, options = {}) => {
		const promiseForFetch = new PromiseDefer();
		options = {
			...options,
			body: JSON.stringify(options.body)
		};
		const initOptions = {
			method: type,
			...this.defaultOptions,
			...options
		};
		
		this.core(url, initOptions, promiseForFetch, options);
		return promiseForFetch.promise;
	}

	/**
	* ajax is adapter pattern for it's functionality
	* @param  {[type]} url takes API url as parameter
	* @return {[type]}     promise for fetch
	*/
	ajax = (url) => ({
		get: (options) => this.coreUtil('GET', url, options),
		post: (options) => this.coreUtil('POST', url, options),
		put: (options) => this.coreUtil('PUT', url, options),
		delete: (options) => this.coreUtil('DELETE', url, options)
	})
}

export default NetPack;
