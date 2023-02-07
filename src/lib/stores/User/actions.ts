import UserService from '@src/services/UserService'
import type { Writable } from 'svelte/store'
import type { IUserStore } from './state'

export default {
	async updateUsers(state: Writable<IUserStore>) {
		const users = await UserService.index()
		state.update((store) => ({ ...store, people: users }))
	}
}
