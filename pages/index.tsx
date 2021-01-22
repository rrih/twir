import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Tweet } from "../interfaces";

const Index: FC = () => {
    const [searchedList, setSearchedList] = useState<Array<Tweet>>();

    useEffect(() => {
        result()
    }, [])

    const result = async () => {
        axios.get('http://localhost:3000/api/twitter')
            .then((res) => {
                setSearchedList(res.data.statuses)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>検索結果表示</h1>
            {/* <button type="button" onClick={result}>検索</button> */}
            {searchedList?.map((searchedTweet) => {
                return (
                    <div key={searchedTweet.id}>
                        <div>{searchedTweet.text}</div>
                        <div>{searchedTweet.created_at}</div>
                    </div>
                )
            })}
        </>
    )
}

export default Index