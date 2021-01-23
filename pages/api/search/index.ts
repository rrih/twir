import { NextApiRequest, NextApiResponse } from 'next'
import twitter from '../twitterConnect'

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const paramsForSearch = _req.query
	try {
		await twitter.get('search/tweets', paramsForSearch, function (error: any, result: any) {
			if (!error) {
				res.status(200).json(result)
			}
		})
	} catch (error) {
		res.status(500).json({ statusCode: 500, message: error.message })
	}
}

export default handler
