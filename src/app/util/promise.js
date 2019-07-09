const resolvePromise = (resolve = {}) => Promise.resolve(resolve);

const rejectPromise = (reject = {}) => Promise.reject(reject);

export { resolvePromise, rejectPromise };
