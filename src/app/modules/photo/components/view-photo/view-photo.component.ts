import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription  } from 'rxjs/Subscription';

import { User } from '../../../shared/models/user.model';
import { Album } from '../../../shared/models/album.model';
import { SharedService } from '../../../shared/services/share.service';

@Component({
  selector: 'app-photos',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit, OnDestroy {

  private user: User;
  private albums: Album[];
  private subscription: Subscription;

  constructor(
    private sharedService: SharedService
  ) { 
    this.albums = new Array<Album>();
  }

  ngOnInit() {
    this.user = this.sharedService.getUserDetail();
    this.subscription = this.sharedService.getAlbumsByUserId(this.user.id).subscribe((userAlbum: Album) => {
      this.albums.push(userAlbum);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
