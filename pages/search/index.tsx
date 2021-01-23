import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Tweet } from "../../interfaces";
import { api } from "../../utils/url";
import { theme } from "../../utils/theme";
import { SearchedTweetFrame, SearchTweetInput } from "../../styles";
import { Button, MuiThemeProvider } from "@material-ui/core";
import { Layout } from "../../components/Layout";
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
                <h1>ツイート検索</h1>
                <SearchTweetInput
                    type="text"
                    placeholder="ワードを入力してください 例: `@rrihapp`"
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                />
                <SearchTweetInput
                    type="text"
                    placeholder="検索件数を入力してください 例: 10"
                    onChange={(e: any) => setSearchCountLength(e.target.value)}
                />
                <Button variant="contained" color="secondary" type="submit" onClick={result}>
                検索する
                </Button>
                {searchedList?.map((searchedTweet) => {
                    return (
                        <SearchedTweetFrame key={searchedTweet.id}>
                            <div>{searchedTweet.text}</div>
                            <div>{searchedTweet.created_at}</div>
                        </SearchedTweetFrame>
                    )
                })}
            </Layout>
        </MuiThemeProvider>
    )
}

export default Index