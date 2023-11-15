import axios from 'axios'
import { cookies } from 'next/headers'
import { EnumTokens } from './auth.service'

export const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	method: 'POST'
})
const token = cookies().get(EnumTokens.ACCESS_TOKEN)?.value

const headers = {
	'content-type': 'application/json',
	Authorization: token ? `Bearer ${token}` : ''
}
const graphqlQuery = {
	query: `query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {
		getAllProducts(getAllProductInput: $getAllProductInput) {
			length
			products {
				id
				images
				name
				price
				size {
					id
					name
				}
			}
		}
	}`,
	variables: {
		getAllProductInput: {
			page: '1'
		}
	}
}

export const options = {
	method: 'POST',
	headers: headers,
	body: JSON.stringify(graphqlQuery)
}
