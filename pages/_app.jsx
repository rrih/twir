import Head from "next/head"
import { Provider } from "next-auth/client"

const App = ({Component, pageProps}) => {
    const { session } = pageProps
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
                />
                <meta
                    name="description"
                    content="ツイッタークライアントアプリ"
                />
            </Head>
            <Provider options={{clientMaxAge: 0, keepAlive: 0}} session={session}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default App