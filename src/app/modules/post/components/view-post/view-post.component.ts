import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription  } from 'rxjs/Subscription';

import { User } from '../../../shared/models/user.model';
import { Posts } from '../../../shared/models/posts.model';
import { Comments } from '../../../shared/models/comments.model';
import { SharedService } from '../../../shared/services/share.service';

@Component({
  selector: 'app-posts',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit, OnDestroy {

  private user: User;
  private posts: Posts[];
  private subscription: Subscription;
  private subComments: Subscription;

  constructor(
    private sharedService: SharedService
  ) { 
    this.posts = new Array<Posts>();
  }

  ngOnInit() {
    this.user = this.sharedService.getUserDetail();
    this.subscription = this.sharedService.getUsersPost(this.user.id).subscribe((userPost: Posts) => {
      this.posts.push(userPost);
    });
  }

  showComments(post: Posts){
    post.comments = new Array<Comments>();
    this.subComments = this.sharedService.getCommentsByPostId(post.id).subscribe((postComment: Comments) => {
      post.comments.push(postComment);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
