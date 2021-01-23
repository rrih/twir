import React, { FC } from "react";
import { theme } from "../utils/theme";
import { Layout } from "../components/Layout";
import { MuiThemeProvider } from "@material-ui/core";
// import { signIn, signOut, useSession } from 'next-auth/client'

const Index: FC = () => {
    // const [session, loading] = useSession()

    return (
        <MuiThemeProvider theme={theme}>
            <Layout title="twir">
                <h1>twir</h1>
                Twitterクライアント用アプリケーションです(´･_･`)<br />
                きまぐれで実験的に作っているので色々と変わります<br />
                <a href="https://github.com/rrih/twir">Github</a>
            </Layout>
        </MuiThemeProvider>
    )
}

export default Index