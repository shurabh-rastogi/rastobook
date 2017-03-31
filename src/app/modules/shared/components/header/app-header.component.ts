import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface AppHeader{
  isActive: boolean,
  name: string,
  url: string
} 

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.Default, 
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  private tabList = new Array<AppHeader>();
  @Input() activeTab: string;

  constructor(
    private router: Router
  ) {
    
    this.tabList.push( { isActive: false, name: 'Profile', url: '/profile' } );
    this.tabList.push( { isActive: false, name: 'Posts', url: '/posts' } );
    this.tabList.push( { isActive: false, name: 'Photos', url: '/photos' } );
    
  }

  ngOnInit() {
    //this.displayTab(this.activeTab);
    //console.log(this.activeTab);
    /*this.tabList.forEach( (tabDetail: AppHeader) => {
      //console.log(tabDetail.name);
      if(tabDetail.name == this.activeTab){
        console.log(tabDetail);
        tabDetail.isActive = true;
      }
    });*/
  }

  displayTab(name: string){
    this.tabList.forEach( (tabDetail: AppHeader) => {
      if(tabDetail.name == name){
        tabDetail.isActive = true;
        this.router.navigate([tabDetail.url]);
      }
    });
  }
  
}
