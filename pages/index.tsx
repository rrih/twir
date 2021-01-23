import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Tweet } from "../interfaces";
import { api } from "../utils/url";
import styled from "styled-components";

const SearchedTweetFrame = styled.div`
    border: 1px solid;
    border-bottom: none;
    padding: 2em;
`

const Index: FC = () => {
    const [searchedList, setSearchedList] = useState<Array<Tweet>>();

    useEffect(() => {
        result()
    }, [])

    const result = async () => {
        axios.get(`${api}/api/search`)
            .then((res) => {
                setSearchedList(res.data.statuses)
                console.log(res.data.statuses.length)
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
        <>
            <h1>@rrih_dev関連の最新ツイート</h1>
            {searchedList?.map((searchedTweet) => {
                return (
                    <SearchedTweetFrame key={searchedTweet.id}>
                        <div>{searchedTweet.text}</div>
                        <div>{searchedTweet.created_at}</div>
                    </SearchedTweetFrame>
                )
            })}
        </>
    )
}

export default Index