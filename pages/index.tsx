import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Tweet } from "../interfaces";
import { api } from "../utils/url";
import { theme } from "../utils/theme";
import { SearchedTweetFrame, SearchTweetInput } from "../styles";
import { Layout } from "../components/Layout";
import { Button, MuiThemeProvider } from "@material-ui/core";
// import { signIn, signOut, useSession } from 'next-auth/client'

const Index: FC = () => {
    const [searchedList, setSearchedList] = useState<Array<Tweet>>()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchCountLength, setSearchCountLength] = useState<string>('10')
    // const [session, loading] = useSession()

    useEffect(() => {
        result()
    }, [])

    const result = async () => {
        axios.get(`${api}/api/search`, { params: { q: searchQuery, count: searchCountLength } })
            .then((res) => {
                setSearchedList(res.data.statuses)
                console.log(`length: ${res.data.statuses.length}`)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log(searchedList?.length)
                console.log(searchedList)
            })
    }

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