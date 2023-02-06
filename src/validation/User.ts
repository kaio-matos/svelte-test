import { z } from 'zod'
import { DateSchema } from '@validation/Date'

export const UserSchema = z.object({
	cell: z.string(),
	dob: DateSchema,
	email: z.string(),
	gender: z.enum(['female', 'male']),
	id: z.object({
		name: z.string(),
		value: z.string().nullable()
	}),
	location: z.object({}),
	login: z.object({
		username: z.string()
	}),
	name: z.object({
		first: z.string(),
		last: z.string(),
		title: z.string()
	}),
	nat: z.string(),
	phone: z.string(),
	picture: z.object({
		large: z.string(),
		medium: z.string(),
		thumbnail: z.string()
	}),
	registered: DateSchema
})
