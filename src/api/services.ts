import { createApi } from "./base/api-wrapper";
import { PostsService } from "./sevices/posts-service";

export interface ApiServiceCollection {
    postsSeviceBff: PostsService
}

export function createServicesF(): ApiServiceCollection {
    return {
        postsSeviceBff: createApi(PostsService, 'https://jsonplaceholder.typicode.com')
    }
}

export const services = createServicesF()
