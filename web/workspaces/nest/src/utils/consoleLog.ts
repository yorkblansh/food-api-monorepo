import { pipe } from 'fp-ts/lib/function'
import { isPromise } from './isPromise'

export const consoleLog = async <T>(param: T) => {
	const _consoleLog = (_param: unknown) => {
		console.log(_param)
	}

	if (isPromise(param)) {
		pipe(
			(await param) as Promise<unknown>, //
			_consoleLog,
		)
	} else {
		_consoleLog(param)
	}

	return param
}

