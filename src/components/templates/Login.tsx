'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { IInputLogin } from '@/types/Auth.types'
import { loginSchema } from '@/validation/auth'
import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'

import { defaultClient } from '@/apollo/DefaultClient'
import { AuthService } from '@/service/auth.service'
import { useUserStore } from '@/store/userProfile.store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { LoginDocument, LoginInput } from '../../../graphql/gql/graphql'
import { Button } from '../ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

const Login: FC = () => {
	const responserUser = useUserStore(state => state.addUser)

	const form = useForm<IInputLogin>({
		resolver: zodResolver<any>(loginSchema),
		defaultValues: {
			password: '',
			phone: ''
		}
	})
	const [mutation] = useMutation(LoginDocument, {
		client: defaultClient
	})
	const { push } = useRouter()

	const onSubmitForm = async (data: LoginInput) => {
		await mutation({
			variables: {
				loginInput: {
					password: data.password,
					phone: data.phone
				}
			}
		})
			.then(({ data }) => {
				if (data) {
					responserUser(data.login.user)
					toast.success('Успешная вход в аккаунт'),
						push('/'),
						AuthService.saveTokenToStorage(data.login.accessToken)
					form.reset()
				}
			})
			.catch(er => toast.error(er.message))
	}
	return (
		<Card>
			<CardHeader className='w-[550px] rounded-xl'>
				<CardTitle>Логин</CardTitle>
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
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder='Введите email' {...field} />
										</FormControl>
										<FormDescription>Здесь будет ваш password</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input placeholder='Введите номер телефона' {...field} />
										</FormControl>
										<FormDescription>
											Здесь будет ваш номер телефона
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Link href='/auth/register'>
								<Button className='w-full mt-10 mx-auto'>
									Пройти регистрацию
								</Button>
							</Link>
							<Button type='submit' className='w-full mt-10 mx-auto'>
								Login
							</Button>
						</form>
					</Form>
				</CardContent>
			</CardHeader>
		</Card>
	)
}

export default Login
