import type { IUser } from '@src/interfaces/User'
import { writable } from 'svelte/store'

export type IUserStore = {
	people: IUser[]
}

export const usersState = writable<IUserStore>({
	people: []
})
