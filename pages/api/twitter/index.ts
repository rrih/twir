import { NextApiRequest, NextApiResponse } from 'next'
import twitter from './twitterConnect'

// const params = { screen_name: 'nodejs' };
const searchParams = {
    q: 'rrihapp',
    count: 1
}

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        await twitter.get('search/tweets', searchParams, function (error, result, response) {
            if (!error) {
                res.status(200).json(result)
            }
        })
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message })
    }
}

export default handler