import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { UserService } from '../servcies/user.service';
import { AuthService } from '../servcies/auth.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
    selector:"login",
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{
    username:string = "";
    password:string = "";
    constructor(private authService:AuthService, private router: Router, private persistentService: PersistenceService){
        this.authService.getUserDetails().subscribe(val=>{
            this.persistentService.set('login',true,{type:StorageType.SESSION});
            this.router.navigate(['/']);
        }, err =>{
            if(err.error === 'Unauthorized'){
                this.persistentService.removeAll();
            }
        });
    }
    login(){
        let userInfo = {
            username: this.username,
            password: this.password
        }
        
        this.authService.login(userInfo);
    }
}
