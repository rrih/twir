import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
	site: 'http://localhost:3000',
	providers: [
		Providers.Twitter({
			clientId: process.env.TWITTER_ID === undefined ? '' : process.env.TWITTER_ID,
			clientSecret: process.env.TWITTER_SECRET === undefined ? '' : process.env.TWITTER_SECRET
		})
	],
	// とりあえずアカウントを保持しないので DB は不要なはず
	session: {
		jwt: true,
	},
	debug: false,
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
