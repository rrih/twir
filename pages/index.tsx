import React, { FC } from 'react'
import { theme } from '../utils/theme'
import { Layout } from '../components/Layout'
import { MuiThemeProvider, Button } from '@material-ui/core'
import Head from 'next/head'
import { signIn, signOut, useSession, signin } from 'next-auth/client'

const Index: FC = () => {
	// const [session, loading] = useSession()

	return (
		<MuiThemeProvider theme={theme}>
			<Head>
				<title>twir</title>
			</Head>
			<Layout title="twir">
				<h1>twir</h1>
				Twitterクライアント用アプリケーションです(´･_･`)
				<br />
				きまぐれで実験的に作っているので色々と変わります
				<br />

				<Button variant="contained" color="secondary" type="submit" onClick={() => signin('twitter')}>
					Twitter
				</Button>

				<footer><a href="https://github.com/rrih/twir">GitHub</a></footer>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index
