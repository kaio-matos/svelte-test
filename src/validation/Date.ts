import { z } from 'zod'

export const DateSchema = z.object({
	age: z.number(),
	date: z.string()
})
