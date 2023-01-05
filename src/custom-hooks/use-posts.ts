import { useMemo } from "react"

import { IPostListItems, optionValues } from "../App"

export const useSortedPosts = (posts: IPostListItems['posts'], sort: string) => {
    return useMemo(() => {
        switch(sort) {
          case optionValues.ID: {
            return [...posts].sort((a, b) => a[sort as optionValues.ID] - b[sort as optionValues.ID])
          }
          case optionValues.TITLE: {
            return [...posts].sort((a, b) => a[sort as optionValues.TITLE].localeCompare(b[sort as optionValues.TITLE]))
          }
          default: {
            return posts
          }
        }
    }, [sort, posts])
}

export const useSortedAndSerchedPosts = (posts: IPostListItems['posts'], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    }, [query, sortedPosts])
}
