import React, { FC, useState } from "react"
import { Button, MuiThemeProvider } from "@material-ui/core"
import { Layout } from "../../components/Layout"
import { theme } from "../../utils/theme"
import { SearchTweetInput } from "../../styles"

const Index: FC = () => {
    const [screenName, setScreenName] = useState<string>('')

    const getUrlsByFollowwProfile = () => {
        // フォロイーのプロフィールからURLを取得
    }

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Layout title="twir">
                    <h1>任意のユーザのプロフィールからURL取得</h1>
                    <SearchTweetInput
                        type="text"
                        placeholder="自分のスクリーンネームを入力してください"
                        onChange={(e: any) => setScreenName(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" type="submit" onClick={getUrlsByFollowwProfile} disabled={!screenName}>
                        URLを取得する
                    </Button>
                </Layout>
            </MuiThemeProvider>
        </>
    )
}
export default Index