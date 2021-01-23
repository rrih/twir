import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Twitter({
            clientId: process.env.TWITTER_CONSUMER_KEY === undefined ? '' : process.env.TWITTER_CONSUMER_KEY,
            clientSecret: process.env.TWITTER_CONSUMER_SECRET === undefined ? '' : process.env.TWITTER_CONSUMER_SECRET 
        })
    ],
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)