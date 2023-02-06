import type { z } from 'zod'
import type { UserSchema } from '@validation/User'

export type IUser = z.infer<typeof UserSchema>
