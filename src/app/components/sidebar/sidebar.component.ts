import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servcies/user.service';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from 'app/components/interfaces/user.component';
import { AuthService } from '../../servcies/auth.service';
import { Router } from '@angular/router';
import { PersistenceService, StorageType } from 'angular-persistence';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '', role: 'admin' },
    { path: 'user-login', title: 'Login', icon: 'dashboard', class: '', role: 'admin' },
    { path: 'user-profile', title: 'View Jobs', icon: 'work', class: '', role: 'admin' },
    { path: 'terms', title: 'Manage Terms', icon: 'watch_later', class: '', role: 'admin' },
    { path: 'jobs', title: 'Jobs', icon: 'work', class: '', role: 'faculty' },
    { path: 'table-list', title: 'Manage Terms2', icon: 'watch_later', class: '', role: 'student' }
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    userInfo: UserInfo;
    isLoggedIn$: Observable<boolean>;
    constructor(private userService: UserService, private authService: AuthService, private router: Router, private persistenceService:PersistenceService) { }

    ngOnInit() {
        this.authService.isLoggedIn.subscribe((val:boolean)=>{
            console.log(val);
            if(val){
                let role = this.persistenceService.get('role', StorageType.SESSION);
                console.log(role);
                this.menuItems = ROUTES.filter(menuItem => menuItem.role === role);
            }
        });
        //this.menuItems = ROUTES.filter(menuItem => menuItem);

    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    navigate(path) {
        console.log(path);
        this.router.navigate(['/'+path]);
    }
}
