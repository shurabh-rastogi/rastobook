import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/filter";

import { Album } from "../models/album.model";
import { Comments } from "../models/comments.model";
import { Photo } from "../models/photo.model";
import { Posts } from "../models/posts.model";
import { Todo } from "../models/todo.model";
import { User } from "../models/user.model";

@Injectable()
export class SharedService {

    private sessionId: string;
    private baseUrl: string;
    private user: User;

    constructor(
        private http: Http
    ) { 
        this.sessionId = '';
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    getSessionId(): string {
        return this.sessionId;
    }

    setSessionId(sessionId: string){
        this.sessionId = sessionId;
    }

    updateUserDetail(user: User){
        this.user = user;
        this.setSessionId(user.id + '-' + user.username + '-' + user.email);
    }

    getUserDetail(){
        return this.user;
    }

    getAllUsers(): Observable<User[]>{
        return this.http.get(this.baseUrl + 'users')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getLoginUserDetail(email: string, password: string): Observable<User>{
        return this.http.get(this.baseUrl + 'users')
            .flatMap((res: Response) => res.json())
            .filter((user: User) => user.email == email && user.username == password)
            .map((user: User) =>  user);
    }

    getUsersPost(userId: string): Observable<Posts>{
        return this.http.get(this.baseUrl + 'posts')
            .flatMap((res: Response) => res.json())
            .filter((posts: Posts) => posts.userId == userId)
            .catch(this.handleError);
    }
    
    getCommentsByPostId(postId: string): Observable<Comments>{
        return this.http.get(this.baseUrl + 'comments')
            .flatMap((res: Response) => res.json())
            .filter((comments: Comments) => comments.postId == postId)
            .catch(this.handleError);
    }

    getAlbumsByUserId(userId: string): Observable<Album>{
        return this.http.get(this.baseUrl + 'albums')
            .flatMap((res: Response) => res.json())
            .filter((album: Album) => album.userId == userId)
            .catch(this.handleError);
    }

    getPhotosByAlbumId(albumId: string): Observable<Photo>{
        return this.http.get(this.baseUrl + 'photos')
            .flatMap((res: Response) => res.json())
            .filter((photo: Photo) => photo.albumId == albumId)
            .catch(this.handleError);
    }

    getTodosByUserId(userId: string): Observable<Todo[]>{
        return this.http.get(this.baseUrl + 'todos')
            .map((res: Response) => res.json())
            .filter((todo: Todo) => todo.userId == userId)
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
