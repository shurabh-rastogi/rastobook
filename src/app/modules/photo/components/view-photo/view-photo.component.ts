import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription  } from 'rxjs/Subscription';

import { User } from '../../../shared/models/user.model';
import { Album, AlbumClass } from '../../../shared/models/album.model';
import { Photo } from '../../../shared/models/photo.model';
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
  private subAlbums: Subscription;

  constructor(
    private sharedService: SharedService
  ) { 
    this.albums = new Array<Album>();
  }

  ngOnInit() {
    this.user = this.sharedService.getUserDetail();
    this.subscription = this.sharedService.getAlbumsByUserId(this.user.id).subscribe((userAlbum: Album) => {
      let albumDetail = new AlbumClass();
      albumDetail.id = userAlbum.id;
      albumDetail.userId = userAlbum.userId;
      albumDetail.title = userAlbum.title;
      albumDetail.isActive = false;
      albumDetail.photos = new Array<Photo>();
      this.albums.push(albumDetail);
    });
  }

  showAlbum(album: Album){
    this.albums.forEach((album: AlbumClass) => {
      album.isActive = false;
    });
    album.isActive = true;
    this.subAlbums = this.sharedService.getPhotosByAlbumId(album.id).subscribe((showPhoto: Photo) => {
      album.photos.push(showPhoto);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subAlbums.unsubscribe();
  }

}
