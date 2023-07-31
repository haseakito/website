import { Tag } from "./Tag"

export type Blog = {
    id: string,
    title: string,
    body: string,
    thumbnail: {
        url: string,
        width: number,
        height: number
    },
    tags: Tag[],
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string    
}