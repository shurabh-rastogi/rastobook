import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

import { ViewProfileService } from '../../services/view-profile-service.service';
import { User } from '../../../shared/models/user.model';
import { SharedService } from '../../../shared/services/share.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  private user: User;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.user = this.sharedService.getUserDetail();
  }

}
