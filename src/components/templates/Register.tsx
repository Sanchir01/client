'use client'
import { IInputRegister } from '@/types/Auth.types'
import { registerSchema } from '@/validation/auth'
import { zodResolver } from '@hookform/resolvers/zod'

import Link from 'next/link'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

const Register: FC = () => {
	const form = useForm<IInputRegister>({
		resolver: zodResolver<any>(registerSchema),
		defaultValues: {
			confirmPassword: '',
			password: '',
			email: '',
			phone: '',
		},
	})

	const onSubmitForm = async (data: any) => {
		console.log(data)
	}
	return (
		<Card>
			<CardHeader className='w-[550px] rounded-xl'>
				<CardTitle>Регистрация</CardTitle>
				<CardDescription>
					ДЛЯ РЕГИСТРАЦИИ НЕОБХОДИМО ВВЕСТИ НОМЕР ТЕЛЕФОНА, НА КОТОРЫЙ ВАМ
					ПРИДЕТ СМС-УВЕДОМЛЕНИЕ С КОДОМ
				</CardDescription>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmitForm)}
							className='space-y-3'
						>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Емаил</FormLabel>
										<FormControl>
											<Input placeholder='Введите email' {...field} />
										</FormControl>
										<FormDescription>Здесь будет ваш email</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Емаил</FormLabel>
										<FormControl>
											<Input placeholder='Введите телефон' {...field} />
										</FormControl>
										<FormDescription>Здесь будет ваш телефон</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder='Введите пароль' {...field} />
										</FormControl>
										<FormDescription>Здесь будет ваш password</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder='Повторите пароль' {...field} />
										</FormControl>
										<FormDescription>Здесь будет ваш password</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Link href='/auth/login'>
								<Button className='w-full mt-10 mx-auto'>
									Войти в аккаунт
								</Button>
							</Link>
							<Button type='submit' className='w-full mt-10 mx-auto'>
								Регистрация
							</Button>
						</form>
					</Form>
				</CardContent>
			</CardHeader>
		</Card>
	)
}

export default Register
