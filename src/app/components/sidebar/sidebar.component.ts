import { Component, OnInit } from '@angular/core';
import {UserService} from '../../servcies/user.service';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from 'app/components/interfaces/user.component';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role:string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', role:'admin' },
    { path: 'user-profile', title: 'View Jobs',  icon:'work', class: '',role:'admin'},
    { path: 'terms', title: 'Manage Terms',  icon:'watch_later', class: '',role:'admin' },
    { path: 'table-list', title: 'Jobs',  icon:'work', class: '',role:'faculty' },
    { path: 'table-list', title: 'Manage Terms2',  icon:'watch_later', class: '',role:'student' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userInfo:UserInfo;  
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('sidebar');
    this.userService.getUserDetails().subscribe(res=>{
        this.userInfo = res;
        if(this.userInfo.commonname === 'GAAdmin'){
            console.log('here');
            this.menuItems = ROUTES.filter(menuItem => menuItem.role === 'admin');
            console.log(this.menuItems);
        }
        else
            this.menuItems = ROUTES.filter(menuItem => menuItem);
    }, err=>{
        if(err.error === 'Unauthorized'){
            location.replace('/login');
        }   
    });
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
