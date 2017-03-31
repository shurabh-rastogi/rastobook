import { Comments } from './comments.model';

export interface Posts{
    userId: string,
    id: string,
    title: string,
    body: string,
    comments: Comments[]
}