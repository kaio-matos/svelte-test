import type { IUserStore } from '@stores/User/state'

export default {
	femaleUsers: (state: IUserStore | undefined) =>
		state?.people.filter((user) => user.gender === 'female') || [],
	maleUsers: (state: IUserStore | undefined) =>
		state?.people.filter((user) => user.gender === 'male') || []
}
