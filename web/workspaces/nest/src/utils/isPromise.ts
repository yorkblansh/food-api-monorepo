export const isPromise = (promise: Promise<unknown> | any) => {
	return !!promise && typeof promise.then === 'function'
}
