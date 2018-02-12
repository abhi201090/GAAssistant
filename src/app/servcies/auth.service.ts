import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http'
import { SampleModel } from '../components/datatable/sampleModel';
import { Observable } from 'rxjs/Observable';
import { window } from 'rxjs/operator/window';
import { UserInfo } from '../components/interfaces/user.component';
import { Term } from '../components/interfaces/term.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { PersistenceService, StorageType } from 'angular-persistence';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private status: boolean;
  get isLoggedIn() {
    let flag = this.persistentService.get('login', StorageType.SESSION);
    if (flag)
      this.loggedIn.next(flag);
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private http: HttpClient, private persistentService: PersistenceService) {

  }


  login(data) {
    this.http.post('/login', data, { responseType: 'text' }).subscribe(res => {
      this.getUserDetails().subscribe(val => {
        this.persistentService.set('role', val.role, { type: StorageType.SESSION });
        this.loggedIn.next(true);
        this.persistentService.set('login', true, { type: StorageType.SESSION });
        this.router.navigate(['/']);
      });
    }, err => {

    });
  }

  getUserDetails(): Observable<any> {
    return this.http.get('/userDetails');
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/user-login']);
  }

  reset() {
    this.persistentService.removeAll(StorageType.SESSION);
    this.loggedIn.next(false);
    this.router.navigate(['/user-login']);
  }
}