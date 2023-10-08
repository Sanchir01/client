import { z } from 'zod'

export const registerSchema = z
	.object({
		email: z.string().email(),
		phone: z.string(),
		password: z.string().min(4).max(100, { message: 'Максимум 100 символов' }),
		confirmPassword: z.string().min(6).max(100),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Password is incorrect',
		path: ['ConfirmPassword'],
	})

export const loginSchema = z.object({
	phone: z.string(),
	password: z.string().min(6).max(100, { message: 'Максимум 100 символов' }),
})
