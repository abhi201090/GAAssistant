import { Component, OnInit } from '@angular/core';
import {UserService} from '../../servcies/user.service';
import { Observable } from 'rxjs/Observable';
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
    { path: 'table-list', title: 'Manage Terms1',  icon:'watch_later', class: '',role:'stud' },
    { path: 'table-list', title: 'Manage Terms2',  icon:'watch_later', class: '',role:'fac' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let role = '';
    this.userService.getUserDetails().subscribe(res=>{
        console.log(res.commonname);
    }, err=>{
        if(err.error === 'Unauthorized'){
            location.replace('/login');
        }   
    });
    if(role === 'GAAdmin'){
        console.log('here');
        this.menuItems = ROUTES.filter(menuItem => menuItem.role == 'admin');
    }
        
    else
        this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
