import { loginSchema, registerSchema } from '@/validation/auth'
import { z } from 'zod'

export type IInputRegister = z.infer<typeof registerSchema>

export type IInputLogin = z.infer<typeof loginSchema>
