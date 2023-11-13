/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.freepik.com'
			},
			{
				protocol: 'https',
				hostname: 'i.ibb.co'
			}
		],
		formats: ['image/webp', 'image/avif']
	}
}

module.exports = nextConfig
