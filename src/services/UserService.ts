import { z } from 'zod'
import type { IUser } from '@interfaces/User'
import { UserSchema } from '@src/validation/User'
import { service } from '@services/service'

class UserService {
	async index(quantity = 50): Promise<IUser[]> {
		const { data } = await service.get('/', {
			params: {
				results: quantity
			}
		})
		const result = z.array(UserSchema).safeParse(data.results)
		if (result.success) {
			return result.data
		}
		throw result.error
	}

	async getRandomUser(): Promise<IUser> {
		const sleep = () => new Promise((resolve) => setTimeout(() => resolve(null), 1000))
		await sleep()
		const { data } = await service.get('/')
		const result = UserSchema.safeParse(data.results[0])
		if (result.success) {
			return result.data
		}
		throw result.error
	}
}

export default new UserService()
