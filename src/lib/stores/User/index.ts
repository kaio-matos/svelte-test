import { usersState, type IUserStore } from './state'
import getters from './getters'
import actions from './actions'
// import type { Writable } from 'svelte/store'

// type IGetters = {
// 	[key: string]: (state: IUserStore | undefined) => void
// }

// type IActions = {
// 	[key: string]: (state: IUserStore | undefined) => void
// }

// export default function genericCreateStore<T>(
// 	state: Writable<T>,
// 	getters: IGetters,
// 	actions: IActions
// ) {
// 	let state: Writable<T> | undefined
// 	const { set, subscribe } = state

// 	subscribe((v) => (state = v))

// 	return {
// 		set,
// 		subscribe,
// 		getters
// 	}
// }

function createStore() {
	let state: IUserStore | undefined
	const { set, subscribe } = usersState

	subscribe((v) => (state = v))
	return {
		set,
		subscribe,
		getters: {
			femaleUsers: (_: unknown) => getters.femaleUsers(state),
			maleUsers: (_: unknown) => getters.maleUsers(state)
		},
		actions: {
			updateUsers: () => actions.updateUsers(usersState)
		}
	}
}

export const users = createStore()
