import { useMemo } from "react"
import { PostListItemsType } from "~/api/bff/post-bff"

import { optionValues } from "../App"

export const useSortedPosts = (posts: PostListItemsType, sort: string) => {
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

export const useSortedAndSerchedPosts = (posts: PostListItemsType, sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort)

  return useMemo(() => {
      return sortedPosts.filter((post) => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }, [query, sortedPosts])
}
