import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../servcies/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private flag: boolean = false;
    isLoggedIn$: Observable<boolean>;

    constructor(location: Location, private element: ElementRef, private authService: AuthService) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedIn$.subscribe((value: boolean) => {
            this.flag = value;
        });
        
            this.listTitles = ROUTES.filter(listTitle => listTitle);
         
            var navbar: HTMLElement = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  

    }

    sidebarOpen() {

            const toggleButton = this.toggleButton;
            const body = document.getElementsByTagName('body')[0];

            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');

            this.sidebarVisible = true;
    

    };
    sidebarClose() {

            const body = document.getElementsByTagName('body')[0];
            
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
      

    };
    sidebarToggle() {

            if (this.sidebarVisible === false) {
                this.sidebarOpen();
            } else {
                this.sidebarClose();
            }
       

    };

    getTitle() {
       
            var titlee = this.location.prepareExternalUrl(this.location.path());
            if (titlee.charAt(0) === '#') {
                titlee = titlee.slice(2);
            }
            titlee = titlee.split('/').pop();

            for (var item = 0; item < this.listTitles.length; item++) {
                if (this.listTitles[item].path === titlee) {
                    return this.listTitles[item].title;
                }
            }
      
        return 'Dashboard';
    }
    logout(){

    }
}
